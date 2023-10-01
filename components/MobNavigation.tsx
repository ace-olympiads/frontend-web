import React, { useContext } from "react";
import styles from "../styles/mobileNav.module.css";
import {
  FaGem,
  FaHeart,
  FaQuestionCircle,
  FaBook,
  FaComments,
  FaThumbsUp,
} from "react-icons/fa";
import dataContext from "../context/datacontext";
const MobNavigation = () => {
  const { sidebarOption, setSideBarOption } = useContext(dataContext);
  return (
    <div className={styles.wrapper}>
      <div onClick={() => setSideBarOption("questions")}>
        <FaQuestionCircle />
      </div>
      <div onClick={() => setSideBarOption("comments")}>
        <FaComments />
      </div>
      <div onClick={() => setSideBarOption("concepts")}>
        <FaBook />
      </div>
      <div>
        <FaHeart />
      </div>
    </div>
  );
};

export default MobNavigation;
