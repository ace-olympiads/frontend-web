import { User } from "next-auth";
import { useSession } from "next-auth/react";
import React, { useEffect, useState, useContext } from "react";
import axiosInstance from "../../axios";
import Comment from "../../components/Comment";
import { Comment as comm } from "../../types";
import styles from "../../styles/mycomments.module.css";
import dataContext from "../../context/datacontext";
import Layout from "./Layout";
interface CommentGroups {
  [questionId: string]: comm[];
}
const MyComments = () => {
  const { refetch, setRefetch } = useContext(dataContext);
  const [comments, setComments] = useState<comm[]>();
  const session = useSession();
  useEffect(() => {
    const fetchComments = async () => {
      try {
        if (session.status != "loading") {
          const mail = session?.data?.user?.email;
          const getDetails = await axiosInstance.get(
            `question/user-comments/${mail}`
          );
          const user: comm[] = getDetails.data;
          setComments(user);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchComments();
  }, [session.status, refetch]);
  console.log(session);

  const groupCommentsByQuestion = () => {
    const commentGroups: CommentGroups = {};

    comments?.forEach((comment) => {
      const questionId = comment.question.id.toString();

      if (!commentGroups[questionId]) {
        commentGroups[questionId] = [];
      }

      commentGroups[questionId].push(comment);
    });

    return commentGroups;
  };

  // Group the comments
  const commentGroups = groupCommentsByQuestion();

  return (
    <div>
      <h1 className={styles.head}>Below are all your comments </h1>
      <div>
        {Object.keys(commentGroups).map((questionId) => {
          const question = comments?.find(
            (comment) => comment.question.id === parseInt(questionId)
          );
          const questionText = question?.question.question_text;
          const questionComments = commentGroups[questionId];

          return (
            <div key={questionId} className={styles.question}>
              <p>Q. {questionText}</p>
              {questionComments.map((comment, index) => (
                <Comment
                  key={index}
                  id={comment.id}
                  commenter={comment.commenter}
                  email={comment.email}
                  content={comment.content}
                  published_at={comment.published_at}
                />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyComments;
