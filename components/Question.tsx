import React, { useEffect, useState } from "react";
import styles from "../styles/Question.module.css";
import { extractEmbedIdFromYouTubeLink } from "../utils/youtubeId";
import Image from "next/image";
import { useRouter } from "next/router";
type QuestionProps = {
  question: {
    id: number;
    question_text: string;
    video_solution_url: string;
  };
};

const Question = ({ question }: QuestionProps) => {
  const [thumbnailUrl, setThumbnail] = useState<string>("");
  const router = useRouter();
  useEffect(() => {
    setThumbnail(
      `https://img.youtube.com/vi/${extractEmbedIdFromYouTubeLink(
        `${question?.video_solution_url}`
      )}/0.jpg`
    );
  }, [question]);
  return (
    <div>
      <div className={styles["question-card"]}>
        <Image src={thumbnailUrl} alt="Thumbnail" width={300} height={200} />
        <div
          onClick={() => {
            router.push(`/question/${question.id}`);
          }}
        >
          <div className={styles["question-title"]}>
            Question {question?.id}
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
