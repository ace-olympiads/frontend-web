import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/mains.module.css";
import { motion } from "framer-motion";
import axiosInstance from "../../axios";
import Question from "../../components/Question";
import ReactPaginate from "react-paginate";
import { QuestionData } from "../../types";

export async function getServerSideProps(context: any) {
  const { id } = context.params;
  
  try {
    const response = await fetch(`https://backend.aceacad.com/question/tag/${id}`);
    const questions = await response.json();
    const tagResponse = await fetch(`https://backend.aceacad.com/question/tags/`);
    const tags = await tagResponse.json();
    const tagName = tags.find((t: any) => t.id === parseInt(id))?.name || 'Tag';

    // Ensure questions have an id field
    const questionsWithIds = questions.map((q: any, index: number) => ({
      ...q,
      id: q.id || index // Use the existing id or fallback to array index
    }));

    return {
      props: {
        questions: questionsWithIds,
        tagName,
      },
    };
  } catch (error) {
    console.error("Error fetching questions by tag:", error);
    return {
      props: {
        questions: [],
        tagName: 'Tag',
      },
    };
  }
}

// Define a type that extends QuestionData to include an optional id
type QuestionWithOptionalId = Omit<QuestionData, 'id'> & {
  id?: number | string;
  [key: string]: any;
};

interface TagQuestionsProps {
  questions: QuestionWithOptionalId[];
  id?: number | string;
  tagName: string;
}

const TagQuestions: React.FC<TagQuestionsProps> = ({ 
  questions: initialQuestions = [], 
  tagName: initialTagName 
}) => {
  const router = useRouter();
  const { id } = router.query;
  
  const itemsPerPage = 10;
  
  // Initialize state with questions that have proper IDs
  const [currentItems, setCurrentItems] = useState<QuestionWithOptionalId[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [questions, setQuestions] = useState<QuestionWithOptionalId[]>(() => {
    return initialQuestions.map((q, index) => ({
      ...q,
      id: q.id || index.toString()
    }));
  });
  const [tagName, setTagName] = useState(initialTagName);

  useEffect(() => {
    if (id) {
      const fetchQuestions = async () => {
        try {
          const response = await axiosInstance.get(`/question/tag/${id}`);
          const tagResponse = await axiosInstance.get('/question/tags/');
          const currentTag = tagResponse.data.find((t: any) => t.id === parseInt(id as string));
          
          if (currentTag) {
            setTagName(currentTag.name);
          }
          
          setQuestions(response.data);
          const endOffset = itemOffset + itemsPerPage;
          setCurrentItems(response.data.slice(itemOffset, endOffset));
          setPageCount(Math.ceil(response.data.length / itemsPerPage));
        } catch (error) {
          console.error("Error fetching questions:", error);
        }
      };
      fetchQuestions();
    }
  }, [id, itemOffset, itemsPerPage]);

  // Handle pagination and search
  useEffect(() => {
    if (!questions.length) {
      setCurrentItems([]);
      setPageCount(0);
      return;
    }
    
    const endOffset = Math.min(itemOffset + itemsPerPage, questions.length);
    const paginatedItems = questions.slice(itemOffset, endOffset);
    
    // Ensure each item has required fields
    const itemsWithDefaults = paginatedItems.map((item, index) => ({
      ...item,
      id: item.id || `temp-${index}`,
      question_text: item.question_text || 'Untitled Question',
      video_solution_url: item.video_solution_url || '',
      tags: Array.isArray(item.tags) ? item.tags : []
    }));
    
    setCurrentItems(itemsWithDefaults);
    const calculatedPageCount = Math.ceil(questions.length / itemsPerPage);
    setPageCount(calculatedPageCount > 0 ? calculatedPageCount : 1);
  }, [itemOffset, itemsPerPage, questions]);

  // Handle search
  useEffect(() => {
    if (!searchQuery) {
      // Reset to initial questions when search is cleared
      const resetQuestions = initialQuestions.map((q, index) => ({
        ...q,
        id: q.id || index.toString(),
        question_text: q.question_text || 'Untitled Question',
        video_solution_url: q.video_solution_url || ''
      }));
      setQuestions(resetQuestions);
      return;
    }
    
    const filtered = initialQuestions
      .filter(question => {
        const text = question.question_text || '';
        return text.toLowerCase().includes(searchQuery.toLowerCase());
      })
      .map((q, index) => ({
        ...q,
        id: q.id || `search-${index}`,
        question_text: q.question_text || 'Untitled Question',
        video_solution_url: q.video_solution_url || ''
      }));
    
    setQuestions(filtered);
    setItemOffset(0); // Reset to first page on search
  }, [searchQuery, initialQuestions]);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % Math.max(1, questions.length);
    setItemOffset(newOffset);
  };

  return (
    <div className={styles.mains_wrapper}>
      <div className={styles.cover}>
        <div className={styles.content}>
          <div className={styles.header_wrapper}>
            <div className={styles.header}>
              <h4>Questions tagged: {tagName}</h4>
              <button>{questions?.length} Questions</button>
            </div>
            <div className={styles.searchWrap}>
              <h3>
                Browse questions related to {tagName}
              </h3>
              <div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search questions..."
                  className={styles.searchInput}
                />
              </div>
            </div>
          </div>
          <div className={styles.question_wrap}>
            <div className={styles.question_paginate_container}>
              {currentItems?.map((question) => (
                <Question question={question} key={question.id} />
              ))}
              {currentItems?.length === 0 && (
                <div className={styles.noResults}>
                  No questions found for this tag.
                </div>
              )}
            </div>
            {pageCount > 1 && (
              <ReactPaginate
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                marginPagesDisplayed={4}
                pageCount={pageCount}
                previousLabel="<"
                pageClassName="page-item"
                pageLinkClassName={styles["page-link"]}
                previousClassName="page-item"
                previousLinkClassName={styles["page-link"]}
                nextClassName="page-item"
                nextLinkClassName={styles["page-link"]}
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName={styles["page-link"]}
                containerClassName={styles["pagination"]}
                activeClassName="active"
                renderOnZeroPageCount={null}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagQuestions;
