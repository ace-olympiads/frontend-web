import { useRouter } from 'next/navigation';
import '../styles/welcome.module.css';

const Welcome = () => {
  const router = useRouter();

  const handleStart = () => {
    router.push('/upload');
  };

  return (
    <>
      <div>
        <div className="welcome-container">
          <div className="welcome-text">
            <div className="text-style-1">Unlock Your</div>
            <span className="text-style-2">Competitive Edge</span>
            <span className='text-style-1'> with</span>
            <div className="text-style-3">AceOlympiads</div>
            <button className='getting-started-btn' onClick={handleStart}>Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
