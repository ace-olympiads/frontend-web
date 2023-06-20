import React, { useEffect, useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import useDrag from "../hooks/useDrag";
import styles from "../styles/Content.module.css";
import Question from "./Question";
import Concept from "./Concept";
import axios from "axios";
import { ContentProp } from "../types";
type propstypes = { type: string };
type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const Content = ({ type }: propstypes) => {
  const [object, setObjects] = useState<ContentProp[]>([]);

  useEffect(() => {
    if (type === "question") {
      axios
        .get("/api/allQuestions")
        .then((response) => setObjects(response.data))
        .catch((error) => console.error(error));
    }
    if (type === "concept") {
      axios
        .get("/api/concepts")
        .then((response) => setObjects(response.data))
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
              {object.map((e) => (
                <>
                  {type === "question" && <Question key={e.id} question={e} />}
                  {type === "concept" && <Concept key={e.id} concept={e} />}
                  {type === "Recently Learnt" && (
                    <Concept key={e.id} concept={e} />
                  )}
                  {type === "Recently Solved" && (
                    <Question key={e.id} question={e} />
                  )}
                  {type === "Suggested FAQs" && (
                    <Question key={e.id} question={e} />
                  )}
                  {type === "Similar concepts" && (
                    <Concept key={e.id} concept={e} />
                  )}
                </>
              ))}
            </ScrollMenu>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
