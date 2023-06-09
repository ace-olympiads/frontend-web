import React from 'react'
import styles from '../styles/Concept.module.css'
import rando from '../public/assets/welcomeImg.png'
import Image from 'next/image'
const Concept = () => {
  return (
    <div>
      <div className={styles['concept-card']}>
        <div className={styles['concept-img']}>
          <Image src={rando} alt="" />
        </div>
        <div className={styles['concept-title']}>Projectile Motion</div>
      </div>
    </div>
  );
};

export default Concept;