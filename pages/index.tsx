import { useRouter } from "next/navigation";

import React, { useEffect, useRef, useState } from "react";
import Welcome from "../components/Welcome";
import CarouselWrapper from "../components/Caraousel";
import Content from "../components/Content";
import Testimonials from "../components/Testimonial";

import styles from "../styles/Home.module.css";

import {
  useSession,
  signOut,
  getSession,
  GetSessionParams,
} from "next-auth/react";
import axiosInstance from "./api/axios";

import { ConceptProps, User, Testimonial, QuestionType } from "../types";
import Question from "../components/Question";

interface HomePageProps {
  user: User;
  concepts: ConceptProps[]; // Replace UserType with the actual type of the user object
  testimonials: Testimonial[];
  questions: QuestionType[];
}

export async function getServerSideProps(
  context: GetSessionParams | undefined
) {
  try {
    const session = await getSession(context);
    const response = await axiosInstance.get(`/concepts/`);
    const testimonialsData = await axiosInstance.get(`/testimonials/`);
    console.log(testimonialsData);
    const questionsData = await axiosInstance.get("/question/add");
    const questions: QuestionType[] = questionsData.data;
    const testimonials: Testimonial[] = testimonialsData.data;
    const concepts: ConceptProps[] = response.data;
    if (session) {
      const mail = session?.user?.email;

      const getDetails = await axiosInstance.get(
        `/users/account/?email=${mail}`
      );
      const user: User = getDetails.data;
      return {
        props: {
          user,
          concepts,
          testimonials,
          questions,
        },
      };
    } else {
      const response = await axiosInstance.get(`/concepts/`);
      const concepts: ConceptProps[] = response.data;
      const testimonialsData = await axiosInstance.get(`/testimonials/`);
      const testimonials: Testimonial[] = testimonialsData.data;
      const questionsData = await axiosInstance.get("/question/add");
      const questions: QuestionType[] = questionsData.data;
      return {
        props: {
          concepts,
          testimonials,
          questions,
        },
      };
    }
  } catch (error) {
    console.log(error);
  }

  return {
    props: {},
  };
}

const HomePage: React.FC<HomePageProps> = ({
  user,
  concepts,
  testimonials,
  questions,
}) => {
  console.log(testimonials);
  const session = useSession();
  const router = useRouter();

  return (
    <div>
      <Welcome />
      <div className={styles["logos"]}>
        <div className={styles["logos-slide"]}>
          {testimonials.map((item, index) => (
            <Testimonials item={item} key={index} />
          ))}
        </div>
      </div>
      {/*  */}
      <h1 className={styles.head}>
        Explore our <span> Courses</span>
      </h1>
      <CarouselWrapper concepts={concepts} />
      <h1 className={styles.head}>
        Enhance knowledge with our <span>Amazing Solutions</span>
      </h1>
      <div className={styles.quesGrid}>
        <div className={styles.questionWrap}>
          {questions.slice(0, 6).map((question, index) => {
            return <Question key={index} question={question} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
