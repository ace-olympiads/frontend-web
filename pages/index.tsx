import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Welcome from "../components/Welcome";
import Content from "../components/Content";
import {
  useSession,
  signOut,
  getSession,
  GetSessionParams,
} from "next-auth/react";
import axiosInstance from "./api/axios";
import { User } from "../types";
interface HomePageProps {
  user: User; // Replace UserType with the actual type of the user object
}
export async function getServerSideProps(
  context: GetSessionParams | undefined
) {
  const session = await getSession(context);

  try {
    const mail = session?.user?.email;
    const getDetails = await axiosInstance.get(`/users/account/?email=${mail}`);
    const user: User = getDetails.data;

    return {
      props: {
        user,
      },
    };
  } catch (error) {
    console.log(error);
  }

  return {
    props: {},
  };
}
const HomePage: React.FC<HomePageProps> = ({ user }) => {
  const session = useSession();
  const router = useRouter();

  return (
    <div>
      <button onClick={() => signOut()}>Sign out</button>
      <Welcome />
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
      <button onClick={() => router.push("/auth")}>login</button>
    </div>
  );
};

export default HomePage;
