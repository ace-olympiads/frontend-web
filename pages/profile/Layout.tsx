import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Banner from "../../components/Banner";
const Layout = ({ children }: { children: any }) => {
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
        {children}
      </div>
    </div>
  );
};

export default Layout;
