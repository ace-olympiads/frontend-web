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

import { ConceptProps, User, Testimonial } from "../types";

interface HomePageProps {
  user: User;
  concepts: ConceptProps[]; // Replace UserType with the actual type of the user object
  testimonials: Testimonial[];
}

export async function getServerSideProps(
  context: GetSessionParams | undefined
) {
  try {
    const session = await getSession(context);
    const response = await axiosInstance.get(`/concepts/`);
    const testimonialsData = await axiosInstance.get(`/testimonials/`);
    console.log(testimonialsData);
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
        },
      };
    } else {
      const response = await axiosInstance.get(`/concepts/`);
      const concepts: ConceptProps[] = response.data;
      const testimonialsData = await axiosInstance.get(`/testimonials/`);
      const testimonials: Testimonial[] = testimonialsData.data;

      return {
        props: {
          concepts,
          testimonials,
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
      <CarouselWrapper concepts={concepts} />
      {user?.last_viewed_questions ? (
        <>
          {/* <Content type="Recently Solved" user={user} /> */}
          {/* <Content type="Recently Learnt" user={user} />
          <Content type="question" /> <Content type="concept" /> */}
        </>
      ) : (
        <>{/* <Content type="question" /> <Content type="concept" /> */}</>
      )}
    </div>
  );
};

export default HomePage;
