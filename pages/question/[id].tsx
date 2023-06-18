import React, { useEffect, useState } from "react";
import YoutubeEmbed from "../../components/YoutubeEmbed";
import SolutionBox from "../../components/SolutionBox";
import Comments from "../../components/Comments";
import styles from "../../styles/QuestionId.module.css";
import axiosInstance from "../api/axios";
import { extractEmbedIdFromYouTubeLink } from "../../utils/youtubeId";
import Concept from "../../components/Concept";
interface Question {
  id: Number;
  question_text: string;
  video_solution_url: string;
  text_solution: string;
  text_solution_latex: string;
  created_at: string;
  updated_at: string;
  category: string;
  concept: Number;
  author: Number;
}

const page = ({ params }) => {
  const [question, setQuestion] = useState<Question>();
  console.log(params);
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 5, 4];
  const id = params.id;

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
                    <Concept />
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
