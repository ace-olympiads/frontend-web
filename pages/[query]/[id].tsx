import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import axiosInstance from "../api/axios";
import { ContentProp } from "../../types";
import Question from "../../components/Question";
import { useRouter } from "next/router";
import styles from "../../styles/query.module.css";
import { extractEmbedIdFromYouTubeLink } from "../../utils/youtubeId";
interface PageProps {
  query: string;
  id: string;
}

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  context
) => {
  const { query, id } = context.query;

  return {
    props: {
      query: query as string,
      id: id as string,
    },
  };
};

const page = ({ id, query }: PageProps) => {
  const [object, setObjects] = useState<ContentProp[]>([]);
  const router = useRouter();

  const fetchParticularData = async () => {
    const response = await axiosInstance.get(`/question/${query}/${id}`);
    console.log(response.data);
    setObjects(response.data);
  };
  useEffect(() => {
    fetchParticularData();
  }, []);

  return (
    <div>
      <div className={styles["title"]}>
        Here are all the questions having the tag{" "}
        <span>#{router.query.query}</span>
      </div>
      <div className={styles["question-container"]}>
        {object?.map((e) => {
          return <Question key={e.id} question={e} />;
        })}
      </div>
    </div>
  );
};

export default page;
