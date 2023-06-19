import React from 'react'
import styles from '../styles/Concept.module.css'
import rando from '../public/assets/welcomeImg.png'
import Image from 'next/image'

type ConceptProps = {
  concept: {
    id: number;
    title: string;
    content: string;
  };
};

const Concept = ({ concept }: ConceptProps) => {
  return (
    <div>
      <div className={styles['concept-card']}>
        <div className={styles['concept-img']}>
          <Image src={rando} alt="" />
        </div>
        <div className={styles['concept-title']}>{concept.title}</div>
        <div className={styles['concept-content']}>{concept.content}</div>
      </div>
    </div>
  );
};

export default Concept;