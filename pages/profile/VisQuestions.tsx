import React from "react";
import Layout from "./Layout";
import styles from "../../styles/profile.module.css";
import { User } from "../../types";
import { GetSessionParams, getSession } from "next-auth/react";
import axiosInstance from "../api/axios";
import Question from "../../components/Question";
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
const VisQuestions: React.FC<{ user: User }> = ({ user }) => {
  return (
    <Layout>
      <h1 className={styles.head}>Recently seen questions</h1>
      <div className={styles.question}>
        {user.last_viewed_questions?.map((question) => {
          return <Question question={question} />;
        })}
      </div>
    </Layout>
  );
};

export default VisQuestions;
