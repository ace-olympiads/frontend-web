import React, { useEffect, useState } from "react";
import styles from "../styles/Question.module.css";
import { extractEmbedIdFromYouTubeLink } from "../utils/youtubeId";
import Image from "next/image";
import { useRouter } from "next/router";
import defaultImg from "../public/assets/userImg.png";
import { QuestionProps } from "../types";
import { table } from "console";

import like from "../public/assets/like.png";
import views from "../public/assets/views.png";
import comment from "../public/assets/comment.png";

const Question = ({ question }: QuestionProps) => {
  console.log(question);
  const [thumbnailUrl, setThumbnail] = useState<string>("");
  const router = useRouter();
  useEffect(() => {
    setThumbnail(
      `https://img.youtube.com/vi/${extractEmbedIdFromYouTubeLink(
        `${question?.video_solution_url}`
      )}/0.jpg`
    );
    console.log(thumbnailUrl);
  }, [question]);
  console.log(thumbnailUrl);
  return (
    <div>
      <div className={styles["question-card"]}>
        {thumbnailUrl ? (
          <Image src={thumbnailUrl} alt="Thumbnail" width={300} height={200} />
        ) : (
          <Image src={defaultImg} alt="Thumbnail" width={300} height={200} />
        )}
        <div
          onClick={() => {
            router.push(`/question/${question.id}`);
          }}
        >
          <span className={styles["question-title"]}>Ques.</span>
          <span className={styles["question-content"]}>
            {question?.question_text.length < 60
              ? question.question_text
              : `${question.question_text.substring(0, 60)}..`}
          </span>
        </div>
        <div className={styles.question_tags_container}>
          {question?.tags?.map((tag) => {
            return (
              <div className={styles.question_tags_element} key={tag.id}>
                {tag.name.length < 8
                  ? tag.name
                  : `${tag.name.substring(0, 7)}...`}
              </div>
            );
          })}
        </div>
        <div className={styles.icons_wrapper}>
          <div>
            <Image src={like} alt="asdf" />
            <span>234</span>
          </div>
          <div>
            <Image src={views} alt="asdf" />
            <span>234</span>
          </div>
          <div>
            <Image src={comment} alt="asdf" />
            <span>234</span>
          </div>
        </div>

        <button
          onClick={() => {
            router.push(`/question/${question.id}`);
          }}
          className={styles.go_to_question}
        >
          View Answer
        </button>
      </div>
    </div>
  );
};

export default Question;
