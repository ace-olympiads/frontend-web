import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Welcome from "../components/Welcome";
import CarouselWrapper from "../components/Caraousel";
import Content from "../components/Content";
import {
  useSession,
  signOut,
  getSession,
  GetSessionParams,
} from "next-auth/react";
import axiosInstance from "./api/axios";
import { ConceptProps, User } from "../types";
interface HomePageProps {
  user: User;
  concepts: ConceptProps[]; // Replace UserType with the actual type of the user object
}

export async function getServerSideProps(
  context: GetSessionParams | undefined
) {
  try {
    const session = await getSession(context);
    if (session) {
      const mail = session?.user?.email;
      const getDetails = await axiosInstance.get(
        `/users/account/?email=${mail}`
      );
      const user: User = getDetails.data;
      const response = await axiosInstance.get(`/concepts/`);
      const concepts: ConceptProps[] = response.data;
      return {
        props: {
          user,
          concepts,
        },
      };
    } else {
      const response = await axiosInstance.get(`/concepts/`);
      const concepts: ConceptProps[] = response.data;

      return {
        props: {
          concepts,
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
const HomePage: React.FC<HomePageProps> = ({ user, concepts }) => {
  console.log(concepts);
  const session = useSession();
  const router = useRouter();

  return (
    <div>
      <button onClick={() => signOut()}>Sign out</button>
      <Welcome />
      <button onClick={() => router.push("/auth")}>login</button>

      <CarouselWrapper concepts={concepts} />

      {user?.last_viewed_questions ? (
        <>
          {/* <Content type="Recently Solved" user={user} /> */}
          <Content type="Recently Learnt" user={user} />
          <Content type="question" />
          <Content type="concept" />
        </>
      ) : (
        <>
          <Content type="question" />
          <Content type="concept" />
        </>
      )}
    </div>
  );
};

export default HomePage;
