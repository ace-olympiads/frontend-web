import React, { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import styles from "../styles/mains.module.css";
import { GetSessionParams } from "next-auth/react";
import { Exam, QuestionData } from "../types";
import { motion } from "framer-motion";
import axiosInstance from "./api/axios";
import Question from "../components/Question";
import ReactPaginate from "react-paginate";
export async function getServerSideProps(
  context: GetSessionParams | undefined
) {
  try {
    const response = await axiosInstance.get(`/question/add`);
    const questions: QuestionData[] = response.data;

    return {
      props: {
        questions,
      },
    };
  } catch (error) {
    console.log(error);
  }

  return {
    props: {},
  };
}
const JeeMains: React.FC<{ questions: QuestionData[] }> = ({ questions }) => {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState<QuestionData[]>();
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 10;
  const [searchQuery, setSearchQuery] = useState<string>("");
  // ...

  // Filter questions based on search query
  const filteredQuestions = questions.filter((question) =>
    question.question_text.toLowerCase().includes(searchQuery.toLowerCase())
  );
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(filteredQuestions.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredQuestions.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, filteredQuestions]);
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % questions.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div className={styles.mains_wrapper}>
      <div className={styles.cover}>
        {/* <div className={styles.header}>
          <h1>JEE Mains</h1>
          <button>{questions.length} Questions</button>
        </div>
        <h3>Courses that help beginner designers become true unicorns.</h3>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search questions..."
          className={styles.searchInput}
        /> */}

        <div className={styles.content}>
          <div className={styles.header_wrapper}>
            <div className={styles.header}>
              <h4>JEE Mains</h4>
              <button>{questions.length} Questions</button>
            </div>
            <div className={styles.searchWrap}>
              <h3>
                Courses that help beginner designers become true unicorns.
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
              {currentItems?.map((question: any) => {
                return <Question question={question} key={question.id} />;
              })}
            </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default JeeMains;
