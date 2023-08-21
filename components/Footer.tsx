import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaAccessibleIcon,
} from "react-icons/fa";
import styles from "../styles/footer.module.css";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_primary}>
        <div className={styles.footer_title}>AceOlympiads | aceacad</div>
        <div className={styles.footer_body}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quod
          officiis praesentium.
        </div>
        <div className={styles.footer_nav}>
          <div className={styles.footer_nav_links}>Home</div>
          <div className={styles.footer_nav_links}>Services</div>
          <div className={styles.footer_nav_links}>About</div>
          <div className={styles.footer_nav_links}>FAQs</div>
          <div className={styles.footer_nav_links}>Contact us</div>
        </div>
      </div>
      <hr />
      <div className={styles.footer_secondary}>
        <div className={styles.footer_logo}>
          <div className={styles.footer_logo_title}>AceOlympiads</div>
        </div>
        <div className={styles.footer_rights}>
          @ 2023 aceacad. All Rights Reserved
        </div>
        <div className={styles.footer_socials}>
          <div className={styles.footer_socials_fb}>
            <FaFacebook />
          </div>
          <div className={styles.footer_socials_ln}>
            <FaTwitter />
          </div>
          <div className={styles.footer_socials_tw}>
            <FaInstagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
