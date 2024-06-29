import React, { useEffect, useState } from "react";
import YoutubeEmbed from "../../components/YoutubeEmbed";
import SolutionBox from "../../components/SolutionBox";
import Comments from "../../components/Comments";
import styles from "../../styles/QuestionId.module.css";
import axiosInstance from "../../axios";
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
  const arr = [1, 2, 32, 3, 23, 23];
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
      <div className={styles["content-parent"]} >
      <div className={styles["content-boy"]}>
     <div className={styles["content"]}>

    {/* back button */}

    <div className={styles["back-btn-here"]} ><BackButton /></div>
          <div className={styles["question-text-container"]}>
            <div className={styles["question-tags"]} >
              <h1>{question?.tags?.[0].name.toUpperCase()} </h1>
              <h1>{question?.examinations?.[0].name.toUpperCase()}</h1>
            </div>
            <div className={styles["question-heading"]}>
              Question {`${question?.id}`}
            </div>
            <div className={styles["question-text"]}>
              <BlockMath
                math={preprocessLatex(question?.question_text_latex || "")}
              />
            </div>
          </div>
    <div >
      
    </div>
     <div className={styles["question-videos"]} >
      <YoutubeEmbed
      embedId={`${extractEmbedIdFromYouTubeLink(
        `${question?.video_solution_url}`
      )}`}
    />
    <SolutionBox
      solution={`${question?.text_solution}`}
      latex={`${question?.text_solution_latex}`}
    />
    </div>
        </div>

        <div className={styles["content-side"]}>
              <h2 className={styles["similar-video-text"]}>Similar Concepts</h2>
                  <div className={styles["video-grid"]}>
                      <div className={styles["video-card"]}>Video</div>
                      <div className={styles["video-card"]}>Video</div>
                      <div className={styles["video-card"]}>Video</div>
                      <div className={styles["video-card"]}>Video</div>
                  </div>
                  <div className={styles["graph-grid"]} dangerouslySetInnerHTML={{ __html: question?.iframeText || '' }}>
                  </div>
        </div>
    </div>
      <div className={styles["comments-section"]}>
      {user ? <Comments id={id} user={user} /> : <Comments id={id} />}
        </div>
      </div>
      
      {/* This is not sidebar as mentioned in css but its loweer similar question lists */}
      <div className={styles["sidebar"]}>
        <div className={styles["similar-questions-container"]}>
          <div className={styles["similar-questions-title"]}>
          <span className={styles["title-para"]}>More Questions</span>
            <span className={styles["title-para2"]}>Similar Questions</span>
          </div>
          <div className={styles["scrolling-effect"]}>
            {arr.map((e) => {
              return (
                <div key={e} className={styles["question-boxes"]}>
                <div className="other-question">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Minima voluptatibus ea sunt laboriosam odio. Quod pariatur ut
                                error earum minima.
                </p>
                </div>
                  <button>View Solutions</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
