import React from "react";
import BackButton from "../components/BackButton";
import styles from "../styles/mains.module.css";
import { GetSessionParams } from "next-auth/react";
import { Exam, QuestionData } from "../types";
import axiosInstance from "./api/axios";
import Question from "../components/Question";
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
  return (
    <div className={styles.mains_wrapper}>
      <BackButton />
      <h1>Ace JEE mains with our expert guidance and intuitive solutions</h1>
      <div className={styles.question_paginate_container}>
        {questions?.map((question: any) => {
          return <Question question={question} key={question.id} />;
        })}
      </div>
    </div>
  );
};

export default JeeMains;
