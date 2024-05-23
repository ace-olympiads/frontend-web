import React from 'react';
import styles from "../styles/Courses.module.css";
import ChipTabs from './ChipTabs';
import Bookpage from './Bookpage';

function Courses() {
  return (
    <div>
      <div className={styles.main_new}>
        <h1 className={styles.head}>Enhance your knowledge with</h1>
        <h1 className={styles.head2}>Our Courses</h1>
        <p className={styles.para}>Your path to academic excellence begins here. Discover specialized courses for JEE, NEET, and school curriculums, tailored for your success.</p>
        <div >
          <ChipTabs />
          <Bookpage/>
        </div>
      </div>
    </div>
  );
}

export default Courses;
