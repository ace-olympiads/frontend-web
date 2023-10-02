import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import userImg from "../public/assets/userImg.png";
import Comment from "./Comment";
import { CommentParam, CommentProps, PostCommentProps } from "../types";
import axiosInstance from "../axios";
import Button from "./Button";
import styles from "../styles/Comments.module.css";

const Comments: React.FC<CommentParam> = ({ id, user }) => {
  const [comments, setComments] = useState<CommentProps[]>();
  const [content, setContent] = useState<string>("");
  const { data: session } = useSession();
  const [refetch, setRefetch] = useState<Boolean>(false);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const comments = await axiosInstance.get(`/question/comments/${id}/`);
        setComments(comments.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchComments();
  }, [refetch, id]);

  const postComment = async (content: string) => {
    if (content !== "") {
      const data: PostCommentProps = {
        commenter: user?.id,
        email: session?.user?.email,
        content: content,
        status: true,
        question: id,
      };
      const postData = await axiosInstance.post("/question/comments/", { ...data });
      const response = postData.data;
      setRefetch((prev) => !prev);
      setContent("");
    } else {
      alert("Please enter a comment.");
    }
  };

  const commentComponents =
    comments?.map((comment, index) => comments[comments.length - 1 - index])?.map((comment, index) => (
      <Comment
        id={comment.id}
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
              <div className={styles["comment-text"]}>Let others know what you think</div>
              <div className={styles["comment-flex"]}>
                <textarea
                  onChange={(e) => setContent(e.target.value)}
                  value={content}
                  placeholder="Write your comment here..."
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
              <div className={styles["comment-text"]}>You must be logged in to post a comment</div>
              <textarea
                disabled
                onChange={(e) => setContent(e.target.value)}
                rows={2}
                cols={50}
                placeholder="Login to post a comment"
                className={styles["comment-textarea"]}
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
