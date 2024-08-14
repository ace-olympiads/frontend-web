import React, { useEffect, useState } from "react";
import styles from "../styles/Question.module.css";
import { extractEmbedIdFromYouTubeLink } from "../utils/youtubeId";
import Image from "next/image";
import { useRouter } from "next/router";
import defaultImg from "../public/assets/userImg.png";
import { QuestionProps } from "../types";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


const Question = ({ question }: QuestionProps) => {
  const [thumbnailUrl, setThumbnail] = useState<string>("");
  const router = useRouter();
  const boxVariant = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, x: 100 },
  };
  useEffect(() => {
    setThumbnail(
      `https://img.youtube.com/vi/${extractEmbedIdFromYouTubeLink(
        `${question?.video_solution_url}`
      )}/0.jpg`
    );
    console.log(thumbnailUrl);
  }, [question,thumbnailUrl]);
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

          <div className={styles.question_tags_container}>
            {question?.tags?.slice(0, 3).map((tag) => {
              return (
                <div className={styles.question_tags_element} key={tag.id}>
                  {tag.name.length < 8
                    ? `#${tag.name}`
                    : `#${tag.name.substring(0, 7)}...`}
                </div>
              );
            })}
          </div>
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
