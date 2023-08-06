import { GetSessionParams } from "next-auth/react";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../styles/Carousel.module.css";
import { ConceptProps, Exam } from "../types";
import Concept from "./Concept";
const CarouselWrapper: React.FC<{ concepts: ConceptProps[] }> = ({
  concepts,
}) => {
  const [isMoving, setIsMoving] = useState(false);
  +console.log(" concepts");
  console.log(concepts);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className={styles.carousel_wrapper}>
      <Carousel
        /*
        swipeable={false}
        draggable={false}
        */
        responsive={responsive}
        ssr
        infinite={false}
        beforeChange={() => setIsMoving(true)}
        afterChange={() => setIsMoving(false)}
        containerClass="first-carousel-container container"
      >
        {concepts?.map((concept: any) => {
          return <Concept concept={concept} key={concept.id} />;
        })}
      </Carousel>
    </div>
  );
};

export default CarouselWrapper;
