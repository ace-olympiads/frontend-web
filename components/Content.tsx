import React, { useEffect, useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import useDrag from "../hooks/useDrag";
import styles from "../styles/Content.module.css";
import Question from "./Question";
import Concept from "./Concept";

type propstypes = { type: string };
type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const Content = ({ type }: propstypes) => {
  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22,
  ];
  const { dragStart, dragStop, dragMove } = useDrag();

  const handleDrag = ({ scrollContainer }: scrollVisibilityApiType) => (ev: React.MouseEvent) =>
    dragMove(ev, (posDiff) => {
      if (scrollContainer.current) {
        scrollContainer.current.scrollLeft += posDiff;
      }
    });

  return (
    <>
      <div className={styles.carousel}>
        {type === "question" && <div className={styles["carousel-title"]}>Questions</div>}
        {type === "concept" && <div className={styles["carousel-title"]}>Concepts</div>}
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
              onMouseDown={()=>dragStart}
              onMouseUp={()=>dragStop}
              onMouseMove={handleDrag}
            >
              {arr.map((e) => (
                <>
                  {type === "question" && <Question />}
                  {type === "concept" && <Concept />}
                  {type === "Recently Learnt" && <Concept />}
                  {type === "Recently Solved" && <Question />}
                  {type === "Suggested FAQs" && <Question />}
                  {type === "Similar concepts" && <Concept />}
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
