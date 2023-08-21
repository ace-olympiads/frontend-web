import { User } from "../../types";
import { GetSessionParams, getSession, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axios";
import Layout from "./Layout";
import VideoCard from "../../components/VideoCard";
const VisConcepts: React.FC = () => {
  const session = useSession();

  const [user, setUser] = useState<User>();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (session.status != "loading") {
          const mail = session?.data?.user?.email;
          const getDetails = await axiosInstance.get(
            `/users/account/?email=${mail}`
          );
          const user: User = getDetails.data;
          setUser(user);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, [session.status]);
  console.log(session);
  console.log(user?.last_viewed_concept_videos);
  return (
    <Layout>
      <h1>Recently watched Concept videos</h1>
      <div
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(370px, 1fr))",
          overflowX: "hidden",
          margin: "5vh 0",
          height: "60vh",
        }}
      >
        {user?.last_viewed_concept_videos?.map((video) => {
          return <VideoCard video={video} />;
        })}
      </div>
    </Layout>
  );
};

export default VisConcepts;
