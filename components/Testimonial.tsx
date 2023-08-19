import React from "react";
import styles from "../styles/testimonial.module.css";
import Image from "next/image";
import { Testimonial } from "../types";
interface TestimonialProps {
  item: Testimonial;
}

const Testimonial: React.FC<TestimonialProps> = ({ item }) => {
  return (
    <div>
      <div className={styles.testimonial_wrapper}>
        <div className={styles.author}>
          <Image src={item.image} width={50} height={50} alt="name" />
          <div className={styles.author_body}>
            <h3>{item.name}</h3>
            <h4>{item.designation}</h4>
          </div>
        </div>
        <div className={styles.content}>{item.content}</div>
      </div>
    </div>
  );
};

export default Testimonial;
