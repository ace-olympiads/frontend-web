import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/mains.module.css";
import { motion } from "framer-motion";
import axiosInstance from "../../axios";
import Question from "../../components/Question";
import ReactPaginate from "react-paginate";
import { QuestionData, QuestionType } from "../../types";

// Extend QuestionData to include id which is required by QuestionType
interface QuestionWithId extends QuestionData {
  id: number;
}

export async function getServerSideProps(context: any) {
  const { id } = context.params;
  
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/question/examination/${id}`);
    const questions = await response.json();
    const examResponse = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/question/examinations/`);
    const exams = await examResponse.json();
    const examName = exams.find((e: any) => e.id === parseInt(id))?.name || 'Examination';

    // Ensure questions have an id field
    const questionsWithIds = questions.map((q: any, index: number) => ({
      ...q,
      id: q.id || index // Use the existing id or fallback to array index
    }));

    return {
      props: {
        questions: questionsWithIds,
        examName,
      },
    };
  } catch (error) {
    console.error("Error fetching questions by examination:", error);
    return {
      props: {
        questions: [],
        examName: 'Examination',
      },
    };
  }
}

const ExaminationQuestions: React.FC<{ questions: QuestionWithId[]; examName: string }> = ({ 
  questions: initialQuestions, 
  examName: initialExamName 
}) => {
  const router = useRouter();
  const { id } = router.query;
  const [currentItems, setCurrentItems] = useState<QuestionWithId[]>(initialQuestions);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [questions, setQuestions] = useState<QuestionWithId[]>(initialQuestions);
  const [examName, setExamName] = useState(initialExamName);
  const itemsPerPage = 10;

  useEffect(() => {
    if (id) {
      const fetchQuestions = async () => {
        try {
          const response = await axiosInstance.get<QuestionWithId[]>(`/question/examination/${id}`);
          const examResponse = await axiosInstance.get('/question/examinations/');
          const currentExam = examResponse.data.find((e: any) => e.id === parseInt(id as string));
          
          if (currentExam) {
            setExamName(currentExam.name);
          }
          
          // Ensure each question has an id
          const questionsWithIds = response.data.map((q, index) => ({
            ...q,
            id: q.id || index // Use existing id or fallback to array index
          }));
          
          setQuestions(questionsWithIds);
          const endOffset = itemOffset + itemsPerPage;
          setCurrentItems(questionsWithIds.slice(itemOffset, endOffset));
          setPageCount(Math.ceil(questionsWithIds.length / itemsPerPage));
        } catch (error) {
          console.error("Error fetching questions:", error);
        }
      };
      fetchQuestions();
    }
  }, [id, itemOffset, itemsPerPage]);

  useEffect(() => {
    const filteredQuestions = questions.filter(question =>
      question.question_text.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(filteredQuestions.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredQuestions.length / itemsPerPage));
  }, [searchQuery, questions, itemOffset, itemsPerPage]);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % questions.length;
    setItemOffset(newOffset);
    window.scrollTo(0, 0);
  };

  return (
    <div className={styles.mains_wrapper}>
      <div className={styles.cover}>
        <div className={styles.content}>
          <div className={styles.header_wrapper}>
            <div className={styles.header}>
              <h4>Examination: {examName}</h4>
              <button>{questions?.length} Questions</button>
            </div>
            <div className={styles.searchWrap}>
              <h3>
                Browse questions from {examName}
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
                  No questions found for this examination.
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

export default ExaminationQuestions;
