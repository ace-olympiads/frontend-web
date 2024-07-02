import React, { useEffect, useState } from "react";
import styles from "../styles/banner.module.css";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { User } from "../types";

import axiosInstance from "../axios";
import userImg from "../public/assets/avatar.svg";
const Banner = () => {
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
  }, [session.status,session?.data?.user?.email]);

  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div>
            <Image
              src={
                session.data?.user?.image ? session.data.user.image : userImg
              }
              alt="banner"
              width={150}
              height={150}
            />
          </div>
          <div className={styles.details}>
            <h2>{user?.username}</h2>
            <h3>{user?.email}</h3>
            <div className={styles.utils}>
              <div>
                <div>123</div>
                <div>Likes</div>
              </div>
              <div>
                <div>123</div>
                <div>Likes</div>
              </div>
              <div>
                <div>123</div>
                <div>Likes</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.quote}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quaerat
          iure laborum eos?
        </div>
      </div>
    </div>
  );
};

export default Banner;
