import React, { useEffect, useState } from "react";
import styles from "../styles/Question.module.css";
import { extractEmbedIdFromYouTubeLink } from "../utils/youtubeId";
import Image from "next/image";
import { useRouter } from "next/router";
import defaultImg from "../public/assets/userImg.png";
import { QuestionProps as ImportedQuestionProps, QuestionData } from "../types";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


// Define a more flexible question type that matches the actual data structure
type QuestionProps = {
  id?: number | string;
  question_text: string;
  question_text_latex?: string;
  video_solution_url: string;
  text_solution?: string;
  text_solution_latex?: string;
  created_at?: string;
  updated_at?: string;
  tags?: any[];
  examinations?: any[];
  category?: string;
  concept?: number | null;
  author?: number;
  name?: string;
  iframeText?: string;
  // Allow any additional properties
  [key: string]: any;
};

// Helper function to safely get a string ID
const getSafeId = (id: any): string => {
  if (id === undefined || id === null) return '';
  return String(id);
};

const Question = ({ question }: { question: QuestionProps }) => {
  const [thumbnailUrl, setThumbnail] = useState<string>("");
  const router = useRouter();
  const boxVariant = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, x: 100 },
  };
  useEffect(() => {
    if (question?.video_solution_url) {
      const videoId = extractEmbedIdFromYouTubeLink(question.video_solution_url);
      if (videoId) {
        setThumbnail(`https://img.youtube.com/vi/${videoId}/0.jpg`);
      } else {
        setThumbnail('');
      }
    } else {
      setThumbnail('');
    }
  }, [question?.video_solution_url]);
  console.log(thumbnailUrl);
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView,thumbnailUrl]);
  return (
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      style={{ display: "flex", justifyContent: "center" }}
    >
      {/* <Link href={`/question/${question.id}`}> */}
        
        <motion.div onClick={()=> router.push(`/question/${question.id}`)} className={styles["question-card"]}>
          {thumbnailUrl ? (
            <Image
              className={styles["thumb-question"]}
              src={thumbnailUrl}
              alt="Thumbnail"
              width={100}
              height={400}
            />
          ) : (
            <Image
              className={styles["thumb-question"]}
              src={defaultImg}
              alt="Thumbnail"
              width={100}
              height={100}
            />
          )}

          <div
            className={styles["question-title-wrap"]}
            // onClick={() => {
            //   router.push(`/question/${question.id}`);
            // }}
          >
            <span className={styles["question-title"]}>Ques.</span>
            <span className={styles["question-content"]}>
              {question?.question_text.length < 80
                ? question.question_text
                : `${question.question_text.substring(0, 80)}..`}
            </span>
          </div>

          {question?.tags && question.tags.length > 0 && (
            <div className={styles.question_tags_container}>
              {question.tags.slice(0, 3).map((tag, index) => {
                const tagName = tag?.name || `tag-${index}`;
                return (
                  <div className={styles.question_tags_element} key={tagName}>
                    {tagName.length < 8
                      ? `#${tagName}`
                      : `#${tagName.substring(0, 7)}...`}
                  </div>
                );
              })}
            </div>
          )}
          {/*

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
        </button> */}
        </motion.div>
      {/* </Link> */}
    </motion.div>
  );
};

export default Question;
