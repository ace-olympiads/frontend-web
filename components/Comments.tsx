import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import userImg from "../public/assets/userImg.png";
import Comment from "./Comment";
import { CommentParam, CommentProps, PostCommentProps } from "../types";
import axiosInstance from "../pages/api/axios";
import Button from "./Button";
import styles from "../styles/Comments.module.css";

const Comments: React.FC<CommentParam> = ({ id, user }) => {
  const [comments, setComments] = useState<CommentProps[]>();
  const [content, setContent] = useState<string>("");
  const { data: session } = useSession();
  const [refetch, setRefetch] = useState<Boolean>(false);
  console.log(session);
  useEffect(() => {
    const fetchComments = async () => {
      console.log(id);
      try {
        const comments = await axiosInstance.get(`/question/comments/${id}/`);
        console.log(comments.data);
        setComments(comments.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchComments();
  }, [refetch, id]);
  const postComment = async (content: string) => {
    if (content != "") {
      const data: PostCommentProps = {
        commenter: user?.id,
        email: session?.user?.email,
        content: content,
        status: true,
        question: id,
      };
      const postData = await axiosInstance.post("/question/comments/", {
        ...data,
      });
      const response = postData.data;
      console.log(response);
      setRefetch((prev) => !prev);
      setContent("");
    } else {
      alert("Something went wrong");
    }
  };
  const commentComponents = comments
    ?.map((comment, index) => comments[comments.length - 1 - index])
    ?.map((comment, index) => (
      <Comment
        key={index}
        commenter={comment.commenter}
        email={comment.email}
        content={comment.content}
        published_at={comment.published_at}
      />
    ));

  return (
    <div className={styles["comm-wrapper"]}>
      <h1 className={styles["comments-title"]}>Comments</h1>
      <div className={styles["comment-form"]}>
        {session ? (
          <div className={styles["comment-wrapper"]}>
            <div className={styles["comment-profile-image"]}>
              <Image
                src={user?.image ? user.image : userImg}
                width={100}
                height={100}
                alt="userImg"
              />
            </div>
            <div className={styles["comment-inputs"]}>
              Let Others know what you think
              <div className={styles["comment-flex"]}>
                <textarea
                  onChange={(e) => setContent(e.target.value)}
                  value={content}
                />
                <Button onClick={() => postComment(content)}>Post</Button>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles["comment-wrapper"]}>
            <div className={styles["comment-profile-image"]}>
              <Image src={userImg} alt="userImg" />
            </div>
            <div className={styles["comment-inputs"]}>
              You must be logged in to post a comment
              <textarea
                disabled
                onChange={(e) => setContent(e.target.value)}
                rows={2}
                cols={50}
              />
              <Button disabled>Post</Button>
            </div>
          </div>
        )}
        <div className={styles["comment-components"]}>{commentComponents}</div>
      </div>
    </div>
  );
};

export default Comments;
