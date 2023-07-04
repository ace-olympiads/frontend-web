import React, { useEffect, useState } from "react";
import YoutubeEmbed from "../../components/YoutubeEmbed";
import SolutionBox from "../../components/SolutionBox";
import Comments from "../../components/Comments";
import styles from "../../styles/QuestionId.module.css";
import axiosInstance from "../api/axios";
import { extractEmbedIdFromYouTubeLink } from "../../utils/youtubeId";
import { GetSessionParams, getSession } from "next-auth/react";
import Concept from "../../components/Concept";
import {
  QuestionType,
  QuestionPageProps,
  ConceptType,
  User,
} from "../../types";
import { useRouter } from "next/router";
import BackButton from "../../components/BackButton";
export async function getServerSideProps(context: any) {
  const { id } = context.query;
  const session = await getSession(context);
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
}

const QuestionPage: React.FC<QuestionPageProps> = ({
  id,
  question,
  concepts,
  user,
}) => {
  const router = useRouter();
  const arr = [1, 2, 32, 3, 23, 23, 12, 31, 23, 12, 312];
  return (
    <>
      <BackButton />
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
          <SolutionBox
            solution={`${question?.text_solution}`}
            latex={`${question?.text_solution_latex}`}
          />
          <Comments id={id} user={user} />

          <div className={styles["container-question-concept"]}>
            <div className={styles["similar-container"]}>
              <div className={styles["similar-question-title"]}>
                Similar Questions
              </div>
              <div className={styles["scrolling-effect"]}>
                {arr.map((e) => {
                  return (
                    <div key={e} className={styles["question-boxes"]}>
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
                {concepts?.map((e) => {
                  return (
                    <div key={e.id} className={styles["concept-boxes"]}>
                      <Concept
                        concept={{
                          id: e.id,
                          title: e.title,
                          description: e.description,
                          videos: e.videos,
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
    </>
  );
};

export default QuestionPage;
