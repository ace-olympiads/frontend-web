import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useContext } from "react";
import dataContext from "../../context/datacontext";
import Sidebar from "../../components/Sidebar";
import Banner from "../../components/Banner";
import MyComments from "./MyComments";
import VisQuestions from "./VisQuestions";
import VisConcepts from "./VisConcepts";
const Profile = () => {
  const { sidebarOption, setSideBarOption } = useContext(dataContext);
  useEffect(() => {
    console.log(sidebarOption);
  }, [sidebarOption]);
  const session = useSession();
  const router = useRouter();
  console.log(session, "from layout");
  useEffect(() => {
    if (session?.status === "unauthenticated") {
      router.push("/");
    }
  }, [session?.status, router]);
  const OptionDisplayed =
    sidebarOption === "comments" ? (
      <MyComments />
    ) : sidebarOption === "questions" ? (
      <VisQuestions />
    ) : sidebarOption === "concepts" ? (
      <VisConcepts />
    ) : (
      <></>
    );
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        margin: "4vh 1vw",
      }}
    >
      <Sidebar />
      <div
        className="content"
        style={{ width: "100%", height: "auto", minHeight: "100vh" }}
      >
        <Banner />
        {OptionDisplayed}
      </div>
    </div>
  );
};
export default Profile;
