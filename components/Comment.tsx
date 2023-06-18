import { useSession } from "next-auth/react";
import React from "react";
import { CommentProps } from "../types";
import styles from "../styles/Comment.module.css";

const Comment: React.FC<CommentProps> = (props) => {
  const { commenter, email, content, published_at } = props;
  const date = new Date(published_at);

  const { data: session } = useSession();
  console.log(session);
  return (
    <div className={styles["comment-box"]}>
      <div className={styles["commenter-details"]}>
        <div>{commenter}</div>
        <div>{email}</div>
      </div>
      <div>{content}</div>
      <div>
        {date.toLocaleDateString()} {date.toLocaleTimeString()}
      </div>
    </div>
  );
};

export default Comment;
