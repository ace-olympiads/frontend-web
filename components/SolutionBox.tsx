import React, { useState } from 'react';
import styles from '../styles/Solution.module.css';

type SolutionProps = {
  solution: string;
};

const SolutionBox = ({ solution }: SolutionProps) => {
  const [fullSolution, setFullSolution] = useState(false);
  const displaySolution = solution.substring(0, 600);

  return (
    <div>
      <div className={styles['solution-title']}>Text Solution</div>
      <div className={styles['solution-box']}>
        {fullSolution ? (
          solution
        ) : (
          <>
            {displaySolution}...{' '}
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
