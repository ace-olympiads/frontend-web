import React from 'react';
import styles from '../styles/Question.module.css';

type QuestionProps = {
  question: {
    id: number;
    title: string;
    content: string;
  };
};

const Question = ({ question }: QuestionProps) => {
  return (
    <div>
      <div className={styles['question-card']}>
        <div className={styles['question-title']}>{question.title}</div>
        <div className={styles['question-content']}>{question.content}</div>
      </div>
    </div>
  );
};

export default Question;
