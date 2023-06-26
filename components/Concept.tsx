import React from "react";
import styles from "../styles/Concept.module.css";
import rando from "../public/assets/welcomeImg.png";
import Image from "next/image";
import { ConceptProps } from "../types";
import { useRouter } from "next/router";

const Concept = ({ concept }: ConceptProps) => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push({
          pathname: `/concept/${concept?.id}`,
          query: {
            name: `${concept.title}`,
            id: `${concept.id} `,
          },
        });
      }}
    >
      <div className={styles["concept-card"]}>
        <div className={styles["concept-img"]}>
          <Image src={rando} alt="" />
        </div>
        <div className={styles["concept-title"]}>{concept?.title}</div>
      </div>
    </div>
  );
};

export default Concept;
