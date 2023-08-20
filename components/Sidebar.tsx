import {
  Sidebar as SidebarComp,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import {
  FaGem,
  FaHeart,
  FaQuestionCircle,
  FaBook,
  FaComments,
  FaThumbsUp,
} from "react-icons/fa";

const Sidebar = () => {
  const router = useRouter();
  return (
    <div>
      <SidebarComp style={{ height: "100%" }}>
        <Menu>
          <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
          <SubMenu prefix="Recent" title="Components" icon={<FaHeart />}>
            <MenuItem
              icon={<FaQuestionCircle />}
              onClick={() => router.push("/profile/VisQuestions")}
            >
              Questions
            </MenuItem>
            <MenuItem
              icon={<FaBook />}
              onClick={() => router.push("/profile/VisConcepts")}
            >
              Concepts
            </MenuItem>
            <MenuItem
              onClick={() => router.push("/profile/MyComments")}
              icon={<FaComments />}
            >
              Comments
            </MenuItem>
            <MenuItem icon={<FaThumbsUp />}>Liked Videos</MenuItem>
          </SubMenu>
        </Menu>
      </SidebarComp>
    </div>
  );
};

export default Sidebar;
