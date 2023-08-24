import React from "react";
import { useRouter } from "next/router";
import styles from "../styles/BackButton.module.css";
const BackButton = () => {
  const router = useRouter();
  return (
    <div>
      <button
        title="Go back"
        type="button"
        onClick={() => router.back()}
        className={`${styles["back-button"]}`}
      >
        <div className={`${styles["back-icon"]}`}>&#8249;</div>
      </button>
    </div>
  );
};

export default BackButton;
