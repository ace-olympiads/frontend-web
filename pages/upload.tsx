import { GetSessionParams, getSession, useSession } from "next-auth/react";
import UploadForm from "../components/UploadForm";
import { useEffect } from "react";
import { useRouter } from "next/router"; // Use from "next/router" instead of "next/navigation"
import { User } from "../types";
import axiosInstance from "../axios";
import BackButton from "../components/BackButton";

export async function getServerSideProps(context: GetSessionParams | undefined) {
  const session = await getSession(context);

  let user = null;

  if (session) {
    try {
      const mail = session.user?.email;
      const getDetails = await axiosInstance.get(`/users/account/?email=${mail}`);
      user = getDetails.data;
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  }

  return {
    props: { user },
  };
}

const UploadPage: React.FC<{ user: User | null }> = ({ user }) => {
  const { data: session, status } = useSession(); // Correctly track session state
  const router = useRouter();

  useEffect(() => {
    console.log("Session status:", status);
    if (status === "unauthenticated") {
      console.warn("User is unauthenticated, but staying on the page.");
    }
  }, [status]);

  return (
    <>
      <BackButton />
      <UploadForm user={user} />
    </>
  );
};

export default UploadPage;
