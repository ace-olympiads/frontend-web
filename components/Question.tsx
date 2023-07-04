import React, { useEffect, useState } from "react";
import styles from "../styles/Question.module.css";
import { extractEmbedIdFromYouTubeLink } from "../utils/youtubeId";
import Image from "next/image";
import { useRouter } from "next/router";
import defaultImg from "../public/assets/userImg.png";
import { QuestionProps } from "../types";

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
      <div
        onClick={() => {
          router.push(`/question/${question.id}`);
        }}
        className={styles["question-card"]}
      >
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
          <div className={styles["question-title"]}>
            Question {`${question?.id}`}
          </div>
          <div className={styles["question-content"]}>
            {question?.question_text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
