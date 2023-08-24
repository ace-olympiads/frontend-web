import React, { useEffect, useState } from "react";
import YoutubeEmbed from "../../components/YoutubeEmbed";
import SolutionBox from "../../components/SolutionBox";
import Comments from "../../components/Comments";
import styles from "../../styles/QuestionId.module.css";
import axiosInstance from "../api/axios";
import { extractEmbedIdFromYouTubeLink } from "../../utils/youtubeId";
import { getSession } from "next-auth/react";
import Concept from "../../components/Concept";
import {
  QuestionType,
  QuestionPageProps,
  ConceptType,
  User,
} from "../../types";
import { useRouter } from "next/router";
import BackButton from "../../components/BackButton";
import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";
export async function getServerSideProps(context: any) {
  const { id } = context.query;
  const session = await getSession(context);
  if (session) {
    const mail = session?.user?.email;

    const getDetails = await axiosInstance.get(`/users/account/?email=${mail}`);
    const user: User = getDetails.data;

    const questionFetch = await axiosInstance.get(`question/${id}`, {
      data: {
        email: mail,
      },
    });
    const conceptsFetch = await axiosInstance.get(`concepts/`);
    const question: QuestionType = questionFetch.data;
    const concepts: ConceptType[] = conceptsFetch.data;
    return {
      props: {
        id,
        user,
        question,
        concepts,
      },
    };
  } else {
    const questionFetch = await axiosInstance.get(`question/${id}`);
    const conceptsFetch = await axiosInstance.get(`concepts/`);
    const question: QuestionType = questionFetch.data;
    const concepts: ConceptType[] = conceptsFetch.data;
    return {
      props: {
        id,
        question,
        concepts,
      },
    };
  }
}

const QuestionPage: React.FC<QuestionPageProps> = ({
  id,
  question,
  concepts,
  user,
}) => {
  const router = useRouter();
  const arr = [1, 2, 32, 3, 23, 23, 12, 31, 23, 12, 312, 13, 14, 15, 18];
  function preprocessLatex(latex: string) {
    const replacedNewlines = latex.replace(/\n/g, "$\\\\$");
    const parts = replacedNewlines.split("$");

    const processedParts = parts.map((part, index) => {
      if (index % 2 === 0) {
        return `\\text{${part}}`;
      } else {
        return part;
      }
    });
    return processedParts.join("");
  }
  return (
    <div className={styles["main-container"]}>
      <div className={styles["sidebar"]}>
        <div className={styles["similar-questions-container"]}>
          <div className={styles["similar-questions-title"]}>
            Similar Questions
          </div>
          <div className={styles["scrolling-effect"]}>
            {arr.map((e) => {
              return (
                <div key={e} className={styles["question-boxes"]}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima voluptatibus ea sunt laboriosam odio. Quod pariatur ut
                  error earum minima.
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles["content"]}>
        <div className={styles["blue-bar"]}>
          <BackButton />
          <div className={styles["question-title"]}>
            {question?.question_text.length > 20
              ? `${question?.question_text.slice(0, 20)}...`
              : question?.question_text}
          </div>
        </div>
        <YoutubeEmbed
          embedId={`${extractEmbedIdFromYouTubeLink(
            `${question?.video_solution_url}`
          )}`}
        />{" "}
        <div className={styles["utilities"]}>
          <div className={styles["tags-container"]}>
            Related Tags <br />
            {question?.tags?.map((tag) => {
              return (
                <span
                  key={tag?.id}
                  className={styles["tag-line"]}
                  onClick={() => {
                    router.push({
                      pathname: `/tag/${tag.id}`,
                      query: { data: "tags", id: tag.id, name: tag.name },
                    });
                  }}
                >
                  #{tag?.name}
                </span>
              );
            })}
          </div>
          <div className={styles["tags-container"]}>
            Examinations Appeared
            <br />
            {question?.examinations?.map((exam) => {
              return (
                <span
                  key={exam?.id}
                  className={styles["tag-line"]}
                  onClick={() => {
                    router.push({
                      pathname: `/exam/${exam.id}`,
                      query: { data: "exam", id: exam.id, name: exam.name },
                    });
                  }}
                >
                  #{exam?.name}
                </span>
              );
            })}
          </div>
        </div>
        <div className={styles["question-text-container"]}>
          <div className={styles["question-heading"]}>
            Question {`${question?.id}`}
          </div>
          <div className={styles["question-text"]}>
            {question?.question_text}
            <BlockMath
              math={preprocessLatex(question?.question_text_latex || "")}
            />
          </div>
        </div>
        <SolutionBox
          solution={`${question?.text_solution}`}
          latex={`${question?.text_solution_latex}`}
        />
        <div className={styles["comments-section"]}>
          {user ? <Comments id={id} user={user} /> : <Comments id={id} />}
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
