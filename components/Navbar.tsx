import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import search from "../public/assets/search.png";
import home from "../public/assets/home.png";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const session = useSession();
  const router = useRouter();
  return (
    <div className={styles["navigation-menu"]}>
      <div className={styles["main-title"]}>ACEOLYMPIAD</div>
      <div className={styles["navigation-container"]}>
        {session?.status === "authenticated" ? (
          <>
            <div className={styles["greet"]}>
              Hello {session?.data?.user?.name} !
            </div>
            <div className={styles["profile-image"]}>
              <Image
                src={session?.data?.user?.picture}
                alt=""
                width={40}
                height={40}
              />
            </div>
            <button onClick={() => signOut()} className={styles["login"]}>
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
        <div className={styles["search"]}>
          <Image src={search} alt="" />
        </div>
        <div className={styles["home"]}>
          <Image src={home} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
