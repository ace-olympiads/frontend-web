import React from "react";
import styles from "../styles/Concept.module.css";
import rando from "../public/assets/random.webp";
import circle from "../public/assets/circle.jpg";
import Image from "next/image";
import { ConceptProps } from "../types";
import { useRouter } from "next/router";

const Concept = ({ concept }: ConceptProps) => {
  const router = useRouter();
  return (
    <div
      className={styles.wrapper}
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
      <div className={styles.image}>
        <Image src={rando} />
      </div>

      <div className={styles.image1}>
        <Image src={circle} />
      </div>
      <h1>{concept.title}</h1>
      <h3>{concept.videos.length} Videos</h3>
    </div>
  );
};

export default Concept;
