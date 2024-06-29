// Import necessary dependencies and styles
import { useRouter } from "next/router"; // Update import to use "next/router" instead of "next/navigation"
import styles from "../styles/Welcome.module.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import homeImage from "../assets/home-page.svg"; // Update import to use a proper image path
import Image from "next/image"; // Import the Image component from next/image
const Welcome = () => {
  const router = useRouter();

  // Define a function to handle navigation to the "/auth" route
  const handleStart = () => {
    router.push("/auth");
  };

  return (
    <div className={styles.home_wrapper}>
      <div className={styles.content}>
        <div className={styles.head_left}>
          <div className={styles.left_up}><p>Interactive Learning</p></div>
          <div className={styles.left_up_head}><h1>Unlock Potential with AceAcad</h1></div>
          <div className={styles.left_up_para}><p>Explore a wealth of knowledge with our comprehensive content library tailored for JEE, NEET, and school curriculums.</p></div>
          <div className={styles.left_up_button}>
            <div className={styles.left_up_button_div}>
              <div><button>Join us</button></div>
              <div className={styles.left_logo}><FaLongArrowAltRight/></div>
            </div>
            <h1>Login</h1>
          </div>
        </div>

        <div className={styles.head_right}>
          <Image src={homeImage} alt="Home Page" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;









        {/* <div className={styles.content}>
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
        </div> */}