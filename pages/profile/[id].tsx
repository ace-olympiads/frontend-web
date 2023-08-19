import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Layout from "./Layout";
const Profile = () => {
  const session = useSession();
  const router = useRouter();
  console.log(session, "from layout");
  useEffect(() => {
    if (session?.status === "unauthenticated") {
      router.push("/");
    }
  }, [session?.status, router]);

  return <Layout>somes</Layout>;
};
export default Profile;
