import { useSession } from "next-auth/react";
import React, { useContext } from "react";

import { CommentProps } from "../types";
import styles from "../styles/Comment.module.css";
import Image from "next/image";
import userImg from "../public/assets/avatar.svg";
import cross from "../public/assets/cross.svg";
import axiosInstance from "../pages/api/axios";
import dataContext from "../context/datacontext";
const Comment: React.FC<CommentProps> = (props) => {
  const { id, commenter, email, content, published_at } = props;
  const date = new Date(published_at);
  const { refetch, setRefetch } = useContext(dataContext);
  const { data: session } = useSession();
  const handleDelete = async () => {
    try {
      const resp = await axiosInstance.delete(`/question/comments/${id}/`);
      setRefetch((prev: boolean) => !prev);
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(session);
  return (
    <div className={styles["comment-box"]}>
      <div className={styles["commenter-details"]}>
        {commenter?.image ? (
          <Image
            height={30}
            width={30}
            src={commenter.image}
            alt="user image"
          />
        ) : (
          <Image height={30} width={30} src={userImg} alt="user image" />
        )}

        <p>{commenter.username}</p>
        <p>
          {date.toLocaleDateString()} {date.toLocaleTimeString()}
        </p>
      </div>
      {session?.user?.name === commenter.username && (
        <div className={styles.cross} onClick={() => handleDelete()}>
          <Image height={30} width={30} src={cross} alt="user image" />
        </div>
      )}
      <div className={styles["comment-content"]}>{content}</div>
    </div>
  );
};

export default Comment;
