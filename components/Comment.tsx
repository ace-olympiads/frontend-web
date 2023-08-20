import { useSession } from "next-auth/react";
import React from "react";
import { CommentProps } from "../types";
import styles from "../styles/Comment.module.css";
import Image from "next/image";
import userImg from "../public/assets/avatar.svg";
const Comment: React.FC<CommentProps> = (props) => {
  const { commenter, email, content, published_at } = props;
  const date = new Date(published_at);

  const { data: session } = useSession();
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
      <div className={styles["comment-content"]}>{content}</div>
    </div>
  );
};

export default Comment;
