import React from "react";
import { Exam } from "../types";
import styles from "../styles/Exam.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
const ExamButton: React.FC<{ props: Exam }> = ({ props }) => {
  const router = useRouter();
  return (
    <>
      <ul
        onClick={() => {
          router.push({
            pathname: `/exam/${props.id}`,
            query: {
              id: `${props.id} `,
            },
          });
        }}
        className={styles["ul"]}
      >
        <li className={styles["li"]}>
          <span className={styles["span"]}>{props.name}</span>
        </li>
      </ul>
    </>
  );
};

export default ExamButton;
