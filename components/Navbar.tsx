import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { signOut } from "next-auth/react";
import Link from "next/link";
import avatar from "../public/assets/avatar.svg";
import SearchBar from "./SearchBar";
import { FiChevronDown } from "react-icons/fi";
interface SearchResult {
  id: number;
  title: string;
  question_latex?: string;
  solution: string;
  solution_latex: string;
}
const Navbar = () => {
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const session = useSession();
  const toggleDropdown = (tabIndex: number) => {
    setActiveTab(activeTab === tabIndex ? null : tabIndex);
  };
  const router = useRouter();
  console.log("session is", session);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const handleSearchQueryChange = (newQuery: string) => {
    setSearchQuery(newQuery);
  };

  const handleSearchResults = (results: SearchResult[]) => {
    setSearchResults(results);
  };
  return (
    <div className="navbar">
      <div className={styles.upperNavbar}>
        <div className={styles.logo}>
          <Link href="/">ITI AGNIHOTRI</Link>
        </div>
        <SearchBar
        searchQuery={searchQuery}
        onSearchQueryChange={handleSearchQueryChange}
        onSearchResults={handleSearchResults}
      />
        <div className={styles.authButtons}>
          {session.data?.user ? (
            <>
              <div
                onClick={() => {
                  router.push("/profile");
                }}
                style={{ cursor: "pointer" }}
              >
                <Image
                  style={{ borderRadius: "50%", margin: "0 10px" }}
                  src={
                    session?.data?.user?.image ? session.data?.user.image : avatar
                  }
                  width={42}
                  height={42}
                  alt=""
                />
              </div>
              <button onClick={() => signOut()} className={styles.loginButton}>
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => router.push("/auth")}
                className={styles.loginButton}
              >
                Login
              </button>
              <button
                className={`${styles.signupButton} ${styles.upperSignupButton}`}
                onClick={() => router.push("/auth")}
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
      <hr className={styles.borderLine} />

      <nav className={styles.bottomNavbar}>
      <ul className={styles["nav-links"]}>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li
          className={`${styles.dropdownToggle} ${
            activeTab === 0 ? styles.active : ""
          }`}
          onMouseEnter={() => toggleDropdown(0)}
          onMouseLeave={() => toggleDropdown(0)}
        >
          <Link href="/services">Ace-Olympiads</Link>
          <span
            className={`${styles.dropdownIcon} ${
              activeTab === 0 ? styles.active : ""
            }`}
          ><FiChevronDown /> 
          </span>
          {activeTab === 0 && (
            <ul className={styles.dropdown}>
              <li>
                <Link href="/service1">NMTC</Link>
              </li>
              <li>
                <Link href="/service2">IJSO</Link>
              </li>
            </ul>
          )}
        </li>

        <li
          className={`${styles.dropdownToggle} ${
            activeTab === 1 ? styles.active : ""
          }`}
          onMouseEnter={() => toggleDropdown(1)}
          onMouseLeave={() => toggleDropdown(1)}
        >
          <Link href="/products">Ace- JEE</Link>
          <span
            className={`${styles.dropdownIcon} ${
              activeTab === 1 ? styles.active : ""
            }`}
          >
            <FiChevronDown /> 
          </span>
          {activeTab === 1 && (
            <ul className={styles.dropdown}>
              <li>
                <Link href={"/jee-mains"}>JEE Mains</Link>
              </li>
              <li>
                <Link href="/product2">JEE Advanced</Link>
              </li>
            </ul>
          )}
        </li>
        <li
          className={`${styles.dropdownToggle} ${
            activeTab === 2 ? styles.active : ""
          }`}
          onMouseEnter={() => toggleDropdown(2)}
          onMouseLeave={() => toggleDropdown(2)}
        >
          <Link href="/portfolio">School-Pro</Link>
          <span
            className={`${styles.dropdownIcon} ${
              activeTab === 2 ? styles.active : ""
            }`}
          >
            <FiChevronDown /> 
          </span>
          {activeTab === 2 && (
            <ul className={styles.dropdown}>
              <li>
                <Link href="/project1">7th</Link>
              </li>
              <li>
                <Link href="/project2">8th</Link>
              </li>
              <li>
                <Link href="/project3">9th</Link>
              </li>
              <li>
                <Link href="/project3">10th</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link href="/contact">Ace-NEET</Link>
        </li>
      </ul>
      </nav>
    </div>
  );
};

export default Navbar;
      