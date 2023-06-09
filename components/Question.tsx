import React from 'react';
import styles from '../styles/Question.module.css';

type QuestionProps = {
  question: {
    id: number;
    title: string;
    content: string;
  };
};

const Question = () => {
  return (
    <div>
      <div className={styles['question-card']}>
        <div className={styles['question-title']}>Question</div>
        <div className={styles['question-content']}>HEHE</div>
      </div>
    </div>
  );
};

export default Question;
