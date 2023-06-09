import { useRouter } from 'next/navigation';
import styles from '../styles/Welcome.module.css';

const Welcome = () => {
  const router = useRouter();

  const handleStart = () => {
    router.push('/upload');
  };

  return (
    <div className={styles['welcome-container']}>
      <div className={styles['welcome-text']}>
        <div className={styles['text-style-1']}>Unlock Your</div>
        <span className={styles['text-style-2']}>Competitive Edge</span>
        <span className={styles['text-style-1']}> with</span>
        <div className={styles['text-style-3']}>AceOlympiads</div>
        <button className={styles['getting-started-btn']} onClick={handleStart}>Get Started</button>
      </div>
    </div>
  );
};

export default Welcome;
