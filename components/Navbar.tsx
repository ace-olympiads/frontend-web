import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import search from "../public/assets/search.png";
import home from "../public/assets/home.png";
import styles from "../styles/Navbar.module.css";
import userImg from "../public/assets/userImg.png";
import { User } from "../types";
import Link from "next/link";
import { useState, useEffect } from "react";
const Navbar = () => {
  const session = useSession();
  const router = useRouter();
  const [currUser, setCurrUser] = useState<User>();
  useEffect(() => {
    const use = localStorage.getItem("user");
    if (use) setCurrUser(JSON.parse(use));
  }, [session]);

  return (
    <div className={styles["navigation-menu"]}>
      <div className={styles["main-title"]}>ACEOLYMPIAD</div>
      <div className={styles["navigation-container"]}>
        {session?.status === "authenticated" ? (
          <>
            <div className={styles["greet"]}>
              Hello{" "}
              {session?.data?.user?.name
                ? session?.data?.user?.name
                : currUser?.username}{" "}
              !
            </div>
            <div className={styles["profile-image"]}>
              {session?.data?.user?.image ? (
                <Image
                  src={session?.data?.user?.image}
                  alt=""
                  width={40}
                  height={40}
                />
              ) : (
                <Image src={userImg} alt="" width={40} height={40} />
              )}
            </div>
            <button
              onClick={() => {
                signOut();
                localStorage.removeItem("user");
              }}
              className={styles["login"]}
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            {/* add examinations tab-  list exams and papers */}
            <button
              onClick={() => router.push("/auth")}
              className={styles["signup"]}
            >
              Signup
            </button>
            <button
              onClick={() => router.push("/auth")}
              className={styles["login"]}
            >
              Login
            </button>
          </>
        )}
        <div
          onClick={() => router.push("/search")}
          className={styles["search"]}
        >
          <Image src={search} alt="" />
        </div>
        <Link href="/">
          <div onClick={() => router.push("/")} className={styles["home"]}>
            <Image src={home} alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
