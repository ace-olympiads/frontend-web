import React, { useEffect, useState } from "react";
import YoutubeEmbed from "../../components/YoutubeEmbed";
import SolutionBox from "../../components/SolutionBox";
import Comments from "../../components/Comments";
import styles from "../../styles/QuestionId.module.css";
import axiosInstance from "../api/axios";
import { extractEmbedIdFromYouTubeLink } from "../../utils/youtubeId";

import Concept from "../../components/Concept";
import { Question, QuestionPageProps } from "../../types";
import { useRouter } from "next/router";
export async function getServerSideProps(context: { query: { id: string } }) {
  const { id } = context.query;

  return {
    props: {
      id,
    },
  };
}

const page: React.FC<QuestionPageProps> = ({ id }) => {
  const [question, setQuestion] = useState<Question>();
  const router = useRouter();
  useEffect(() => {
    console.log(question);
  }, [question]);
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 5, 4];
  console.log(id);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosInstance.get(`question/${id}`);
      setQuestion(response.data);
    };
    fetchData();
  }, []);

  return (
    <div
      className={styles["specific-question-container"]}
      style={{ padding: "10vh 8vw" }}
    >
      <div className={styles["question-container"]}>
        <div className={styles["question-text"]}>
          <div className={styles["question-heading"]}>
            Question {`${question?.id}`}
          </div>
          {question?.question_text}
        </div>
        <YoutubeEmbed
          embedId={`${extractEmbedIdFromYouTubeLink(
            `${question?.video_solution_url}`
          )}`}
        />
        <div className={styles["tags-container"]}>
          {question?.tags?.map((tag) => {
            return (
              <span
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
        <SolutionBox solution={`${question?.text_solution}`} />
        <Comments id={id} />
        <div className={styles["container-question-concept"]}>
          <div className={styles["similar-container"]}>
            <div className={styles["similar-question-title"]}>
              Similar Questions
            </div>
            <div className={styles["scrolling-effect"]}>
              {arr.map((e) => {
                return (
                  <div className={styles["question-boxes"]}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minima voluptatibus ea sunt laboriosam odio. Quod pariatur
                    ut error earum minima.
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles["concept-container"]}>
            <div className={styles["related-concept-title"]}>
              Learn Concepts
            </div>
            <div className={styles["scrolling-effect"]}>
              {arr.map((e) => {
                return (
                  <div className={styles["concept-boxes"]}>
                    <Concept
                      concept={{
                        id: 0,
                        title: "",
                        content: "",
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
