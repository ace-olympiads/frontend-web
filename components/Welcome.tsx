import { useRouter } from "next/navigation";
import styles from "../styles/Welcome.module.css";
import { motion } from "framer-motion";
import video from "../public/static/media/landing.mp4";
const Welcome = () => {
  const router = useRouter();
  const handleStart = () => {
    router.push("/auth");
  };
  return (
    <>
      <div className={styles.home_wrapper}>
        <div className={styles.video_background}>
          <video autoPlay loop muted className={styles.video}>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className={styles.content}>
          <div className={styles.head}>
            <motion.h1
              initial={{ x: -1200 }}
              animate={{ x: 0, transition: { duration: 0.5 } }}
            >
              Online Courses
            </motion.h1>
            <motion.h3
              initial={{ x: -1200 }}
              animate={{ x: 0, transition: { duration: 0.5, delay: 0.5 } }}
            >
              Dive in and learn React.js from scratch! Learn Reactjs, Hooks,
              Redux, React Routing, Animations, Next.js and way more!
            </motion.h3>
            <div className={styles.button_group}>
              <motion.button
                initial={{ scale: 1.3, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  transition: { duration: 0.5, delay: 1 },
                }}
                onClick={handleStart}
              >
                Log In
              </motion.button>
              <motion.button
                initial={{ scale: 1.3, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  transition: { duration: 0.5, delay: 1 },
                }}
                onClick={handleStart}
              >
                Get Started
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
