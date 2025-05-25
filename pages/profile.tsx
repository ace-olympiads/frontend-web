import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import ProfileForm from '../components/auth/ProfileForm';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login');
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (!user) {
    return null; // Will redirect to login
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Your Profile - Ace Olympiads</title>
      </Head>
      
      <ProfileForm />
    </div>
  );
};

export default Profile;
