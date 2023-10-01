import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useContext, useState } from "react";
import dataContext from "../../context/datacontext";
import Sidebar from "../../components/Sidebar";
import Banner from "../../components/Banner";
import MyComments from "./MyComments";
import VisQuestions from "./VisQuestions";
import MobNavigation from "../../components/MobNavigation";
import VisConcepts from "./VisConcepts";
const Profile = () => {
  const { sidebarOption, setSideBarOption } = useContext(dataContext);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    // Update windowWidth when the component mounts and when the window is resized
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set the initial window width
    updateWindowWidth();

    // Add an event listener to update the window width on resize
    window.addEventListener("resize", updateWindowWidth);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []); // Empty dependency array to run this effect only once when the component mounts

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
      {windowWidth > 768 && <Sidebar />}
      <div
        className="content"
        style={{ width: "100%", height: "auto", minHeight: "100vh" }}
      >
        <Banner />
        {windowWidth < 768 && <MobNavigation />}

        {OptionDisplayed}
      </div>
    </div>
  );
};
export default Profile;
