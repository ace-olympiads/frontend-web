import { GetSessionParams, getSession, useSession } from "next-auth/react";
import UploadForm from "../components/UploadForm";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { User } from "../types";
import axiosInstance from "./api/axios";
import BackButton from "../components/BackButton";

export async function getServerSideProps(
  context: GetSessionParams | undefined
) {
  const session = await getSession(context);

  try {
    const mail = session?.user?.email;
    const getDetails = await axiosInstance.get(`/users/account/?email=${mail}`);
    const user: User = getDetails.data;

    return {
      props: {
        user,
      },
    };
  } catch (error) {
    console.log(error);
  }

  return {
    props: {},
  };
}
const UploadPage: React.FC<{ user: User }> = ({ user }) => {
  console.log(user);
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    console.log(session?.status);
    if (session?.status !== "authenticated") {
      router.push("/");
    }
  }, [session?.status, router]);

  return (
    <>
      <BackButton />
      <UploadForm user={user} />;
    </>
  );
};

export default UploadPage;
