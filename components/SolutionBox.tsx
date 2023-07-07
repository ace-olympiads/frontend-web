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
    <div>
      <div className={styles['solution-title']}>Text Solution</div>
      <div className={styles['solution-box']}>
        {fullSolution ? (
          <div>
            <div>{solution}</div>
            <BlockMath math={preprocessLatex(latex)} />
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
