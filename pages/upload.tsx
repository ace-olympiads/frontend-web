import { useSessionCompat as useSession } from "../utils/auth-compat";
import UploadForm from "../components/UploadForm";
import { useEffect } from "react";
import { useRouter } from "next/router";
import axiosInstance from "../axios";
import BackButton from "../components/BackButton";

export async function getServerSideProps() {
  return {
    props: {},
  };
}

const UploadPage: React.FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    console.log("Session status:", status);
    
    const fetchUserData = async () => {
      if (session?.user?.email) {
        try {
          const mail = session.user.email;
          const response = await axiosInstance.get(`/users/account/?email=${mail}`);
          localStorage.setItem('user', JSON.stringify(response.data));
        } catch (error) {
          console.error("Error fetching user details:", error);
          localStorage.removeItem('user');
        }
      } else {
        localStorage.removeItem('user');
      }
    };

    if (status === "unauthenticated") {
      console.warn("User is unauthenticated, but staying on the page.");
      localStorage.removeItem('user');
    } else if (status === "authenticated") {
      fetchUserData();
    }
  }, [session, status]);

  return (
    <>
      <BackButton />
      <UploadForm />
    </>
  );
};

export default UploadPage;
