import React, { useState } from "react";
import styles from "../styles/Solution.module.css";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

type SolutionProps = {
  solution: string;
  latex: string;
};

const SolutionBox = ({ solution, latex }: SolutionProps) => {
  const [fullSolution, setFullSolution] = useState(false);
  return (
    <div>
      <div className={styles['solution-title']}>Text Solution</div>
      <div className={styles['solution-box']}>
        {fullSolution ? (
          <div>
            <div>{solution}</div>
            <BlockMath math={latex} />
          </div>
        ) : (
          <>
            <div>{solution.substring(0, 600)}...</div>
            <span
              className={styles['view-solution']}
              onClick={() => {
                setFullSolution((prev) => !prev);
              }}
            >
              View full solution
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default SolutionBox;
