import { useSession } from 'next-auth/react';
import UploadForm from '../components/UploadForm';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const UploadPage = () => {
    const session = useSession();
    const router = useRouter();
    useEffect(() => {
        console.log(session?.status);
        if (session?.status !== 'authenticated') {
          router.push('/')
        }
      }, [session?.status, router]);
    return <UploadForm />;
  };
  
  export default UploadPage;
  