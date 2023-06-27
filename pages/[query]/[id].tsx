import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import axiosInstance from "../api/axios";
import { ContentProp, Video } from "../../types";
import Question from "../../components/Question";
import { useRouter } from "next/router";
import styles from "../../styles/query.module.css";
import { useSession } from "next-auth/react";

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

const QueryPage = ({ id, query }: PageProps) => {
  const [object, setObjects] = useState<ContentProp[]>([]);
  const [videos, setVideos] = useState<Video[]>();
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    const fetchParticularData = async () => {
      if (query === "tag") {
        const response = await axiosInstance.get(`/question/${query}/${id}`);
        console.log(response.data);
        setObjects(response.data);
      } else if (query === "concept") {
        const response = await axiosInstance.get(`/concepts/${id}`, {
          data: {
            email: session?.data?.user?.email,
          },
        });
        const videoList = response.data.videos;
        console.log(videoList);
        setVideos(videoList);
      }
    };
    fetchParticularData();
  }, []);

  return (
    <div>
      {query === "tag" && (
        <div className={styles["title"]}>
          Here are all the questions having the tag{" "}
          <span>#{router.query.name}</span>
        </div>
      )}
      {query === "concept" && (
        <div className={styles["title"]}>
          Here are all the questions related to the concept{" "}
          <span>{router.query.name}</span>
        </div>
      )}
      <div className={styles["question-container"]}>
        {object?.map((e) => {
          return <Question key={e.id} question={e} />;
        })}
        {videos?.map((e) => {
          return (
            <Question
              key={e.id}
              question={{
                id: e.id,
                video_solution_url: e.youtube_url,
                question_text: e.title,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default QueryPage;
