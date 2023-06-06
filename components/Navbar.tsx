import { useSession } from "next-auth/react";
import "../styles/Navbar.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import search from "../public/assets/search.png";
import home from "../public/assets/home.png";
const Navbar = () => {
  const session = useSession();
  const router = useRouter();
  return (
    <div className="navigation-menu">
      <div className="main-title">ACEOLYMPIAD</div>
      <div className="navigation-container">
        {session?.status === "authenticated" ? (
          <></>
        ) : (
          <>
            <button onClick={() => router.push("/auth")} className="signup">
              Signup
            </button>
            <button onClick={() => router.push("/auth")} className="login">
              Login
            </button>
          </>
        )}
        <div className="search">
          <Image src={search} alt="" />
        </div>
        <div className="home">
          <Image src={home} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
