import { User } from "../../types";
import { GetSessionParams, getSession, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axios";
import Layout from "./Layout";

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
  return <Layout>this</Layout>;
};

export default VisConcepts;
