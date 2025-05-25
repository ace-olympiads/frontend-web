import React from "react";
import styles from "../styles/examination.module.css";
import { GetServerSidePropsContext } from "next";
import { getSessionCompat as getSession } from "../utils/auth-compat";
import axiosInstance from "../axios";
import ExamButton from "../components/ExamButton";
import { Exam } from "../types";
import BackButton from "../components/BackButton";
export async function getServerSideProps(
  context: GetServerSidePropsContext
) {
  try {
    const response = await axiosInstance.get(`/question/examinations/`);
    const examinations: Exam[] = response.data;

    return {
      props: {
        examinations,
      },
    };
  } catch (error) {
    console.log(error);
  }

  return {
    props: {},
  };
}
const examination: React.FC<{ examinations: Exam[] }> = ({ examinations }) => {
  return (
    <div>
      <BackButton />

      <div className={styles["examination-container"]}>
        {examinations?.map((exam) => {
          return <ExamButton props={exam} key={exam.id} />;
        })}
      </div>
    </div>
  );
};

export default examination;
