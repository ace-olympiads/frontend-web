import React, { useEffect, useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import useDrag from "../hooks/useDrag";
import styles from "../styles/Content.module.css";
import Question from "./Question";
import Concept from "./Concept";
import axios from "axios";
import { QuestionType, ConceptType, User } from "../types";
import { GetSessionParams, getSession } from "next-auth/react";
import axiosInstance from "../pages/api/axios";

type propstypes = { type: string; user?: User };
type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const Content = ({ type, user }: propstypes) => {
  const [concepts, setConcepts] = useState<ConceptType[]>();
  const [questions, setQuestions] = useState<QuestionType[]>();
  useEffect(() => {
    if (user?.email) {
      console.log("inside");
      if (type === "Recently Learnt") {
        setQuestions(user.last_viewed_questions);
      }
      if (type === "Recently Solved") {
        setConcepts(user.last_viewed_concept_videos);
      }
    }
    if (type === "question") {
      axios
        .get("/api/allQuestions")
        .then((response) => setQuestions(response.data))
        .catch((error) => console.error(error));
    }
    if (type === "concept") {
      axios
        .get("/api/concepts")
        .then((response) => setConcepts(response.data))
        .catch((error) => console.error(error));
    }
  }, [type]);

  const { dragStart, dragStop, dragMove } = useDrag();

  const handleDrag =
    ({ scrollContainer }: scrollVisibilityApiType) =>
    (ev: React.MouseEvent) =>
      dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });

  return (
    <>
      <div className={styles.carousel}>
        {type === "question" && (
          <div className={styles["carousel-title"]}>Questions</div>
        )}
        {type === "concept" && (
          <div className={styles["carousel-title"]}>Concepts</div>
        )}
        {type === "Recently Learnt" && (
          <div className={styles["carousel-title"]}>Recently Learnt</div>
        )}
        {type === "Recently Solved" && (
          <div className={styles["carousel-title"]}>Recently Solved</div>
        )}
        {type === "Suggested FAQs" && (
          <div className={styles["carousel-title"]}>Suggested FAQs</div>
        )}
        {type === "Similar concepts" && (
          <div className={styles["carousel-title"]}>Similar Concepts</div>
        )}
        <div onMouseLeave={dragStop}>
          <div className={styles["carousel-mapping-container"]}>
            <ScrollMenu
              onMouseDown={() => dragStart}
              onMouseUp={() => dragStop}
              onMouseMove={handleDrag}
            >
              {questions && !concepts ? (
                questions.map((e) => (
                  <>
                    {type === "question" && <Question question={e} />}
                    {type === "Suggested FAQs" && <Question question={e} />}
                    {type === "Recently Solved" && <Question question={e} />}
                    {type === "Recently Learnt" && <Question question={e} />}
                  </>
                ))
              ) : concepts ? (
                concepts.map((e) => (
                  <>
                    {type === "concept" && <Concept concept={e} />}
                    {type === "Recently Learnt" && <Concept concept={e} />}
                    {type === "Similar concepts" && <Concept concept={e} />}
                  </>
                ))
              ) : (
                <></>
              )}
            </ScrollMenu>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
