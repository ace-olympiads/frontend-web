import React from 'react'
import styles from "../styles/about.module.css";


export default function Footersec() {
  return (
    <>
    <footer className={styles.footer}>
    <div className={styles.footer__home} >
        <div className={styles.footer__section}>
            <h1 className={styles.footer__logo}>AceAcad</h1>
            <p className={styles.footer__tagline}>Where Your Academic Journey Begins.</p>
            <p>AceAcad, 2024.</p>
        </div>

    <ul className={styles.footer__nav}>
        <li className={styles.nav__item}>
            <h2 className={styles.nav__title}>Home</h2>
            <ul className={styles.nav__ul}>
                <li><a href="#">Exams</a></li>
                <li><a href="#">Courses</a></li>
                <li><a href="#">Questions</a></li>
            </ul>
        </li>
        <li className={styles.nav__item}>
            <h2 className={styles.nav__title}>About</h2>
            <ul className={styles.nav__ul}>
                <li><a href="#">AceAcad</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Our Application</a></li>
            </ul>
        </li>
        <li className={styles.nav__item}>
            <h2 className={styles.nav__title}>Login</h2>
            <ul className={styles.nav__ul}>
                <li><a href="#">Get started</a></li>
                <li><a href="#">Sign up</a></li>
            </ul>
        </li>
    </ul>
    </div>
    <div className={styles.contact__info}>
        <a href="tel:+919980305793" className={styles.contact__link}>
            <span className={styles.contact__icon}>📞</span> (+91) 9980305793
        </a>
        <span className={styles.contact__divider}>|</span>
        <a href="mailto:aceolympiads@gmail.com" className={styles.contact__link}>
            <span className={styles.contact__icon}>✉️</span> aceolympiads@gmail.com
        </a>
    </div>
    <div className={styles.footer__legal}>
        <p>&copy; 2024 AceAcad. All rights reserved.</p>
    </div>
</footer></>
    
  )
}
