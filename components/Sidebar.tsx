import {
  Sidebar as SidebarComp,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import {
  FaGem,
  FaHeart,
  FaQuestionCircle,
  FaBook,
  FaComments,
  FaThumbsUp,
} from "react-icons/fa";
import dataContext from "../context/datacontext";
const Sidebar = () => {
  const { sidebarOption, setSideBarOption } = useContext(dataContext);
  const router = useRouter();

  return (
    <div>
      <SidebarComp style={{ height: "100%" }}>
        <Menu>
          <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
          <SubMenu prefix="Recent" title="Components" icon={<FaHeart />}>
            <MenuItem
              icon={<FaQuestionCircle />}
              onClick={() => setSideBarOption("questions")}
            >
              Questions
            </MenuItem>
            <MenuItem
              icon={<FaBook />}
              onClick={() => setSideBarOption("concepts")}
            >
              Concepts
            </MenuItem>
            <MenuItem
              onClick={() => setSideBarOption("comments")}
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
