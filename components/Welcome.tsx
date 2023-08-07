import { useRouter } from "next/navigation";
import styles from "../styles/Welcome.module.css";
import { motion } from "framer-motion";
const Welcome = () => {
  const router = useRouter();

  const handleStart = () => {
    router.push("/upload");
  };

  return (
    <div className={styles["welcome-container"]}>
      <div className={styles["welcome-text"]}>
        <motion.div
          initial={{ x: -1200 }}
          animate={{ x: 0, transition: { duration: 0.5 } }}
          className={styles["text-style-1"]}
        >
          Unlock Your
        </motion.div>
        <motion.div
          initial={{ x: -1200 }}
          animate={{ x: 0, transition: { duration: 0.5, delay: 0.5 } }}
          className={styles["text-style-2"]}
        >
          Competitive Edge
        </motion.div>
        <motion.div
          initial={{ x: -1200 }}
          animate={{ x: 0, transition: { duration: 0.5, delay: 1 } }}
          className={styles["text-style-1"]}
        >
          {" "}
          with
        </motion.div>
        <motion.div
          initial={{ x: -1200 }}
          animate={{ x: 0, transition: { duration: 0.5, delay: 1.5 } }}
          className={styles["text-style-3"]}
        >
          AceOlympiads
        </motion.div>
        <motion.button
          initial={{ scale: 1.3, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            transition: { duration: 1, delay: 2 },
          }}
          className={styles["getting-started-btn"]}
          onClick={handleStart}
        >
          Get Started
        </motion.button>
      </div>
    </div>
  );
};

export default Welcome;
