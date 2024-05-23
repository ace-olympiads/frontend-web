import React, { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import Link from "next/link";
import avatar from "../public/assets/avatar.svg";
import SearchBar from "./SearchBar";
import { FiChevronDown, FiMenu, FiPlus, FiMinus } from "react-icons/fi";
import UserProfileMenu from "./UserProfileMenu";

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

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [expandOlympiads, setExpandOlympiads] = useState(false);
  const [expandJEE, setExpandJEE] = useState(false);
  const [expandSchoolPro, setExpandSchoolPro] = useState(false);

  return (

    //mobile Navbar
    <div className="navbar">
      {isMobile ? (
        <div className={styles.mobileNavbar}>
          <div className={styles.mobileTopNavbar}>
            <div className={styles.logo}>
              <Link href="/">AceAcad</Link>
            </div>
            <div className={styles.mobileIcons}>
              <div
                onClick={() => {
                  // Handle search icon click
                }}
                className={styles.mobileIcon}
              >
                {/* Add your search icon here */}
              </div>
              <UserProfileMenu
                userImage={
                  session?.data?.user?.image ? session.data?.user.image : avatar
                }
              />
              <div onClick={toggleSidebar} className={styles.mobileIcon}>
                <FiMenu />
              </div>
            </div>
          </div>
          {/* Sidebar */}
          <div
            className={`${styles.mobileSidebar} ${
              sidebarOpen ? styles.open : ""
            }`}
          >
            <nav className={styles.mobileBottomNavbar}>
              <div className={styles.logo}>
                <Link href="/">AceAcad</Link>
              </div>
              <hr className={styles.mobileDivider} />
              <ul className={styles["nav-links"]}>
                <li className={styles.mobileMenuItem}>
                  <Link href="/about">About</Link>
                </li>
                <hr className={styles.mobileDivider} />
                <li>
                  <div
                    className={styles.mobileMenuItem}
                    onClick={() => setExpandOlympiads(!expandOlympiads)}
                  >
                    Ace-Olympiads
                    <div className={styles.mobileMenuIcon}>
                      {expandOlympiads ? <FiMinus /> : <FiPlus />}
                    </div>
                  </div>
                  {expandOlympiads && (
                    <ul className={styles.mobileSubMenu}>
                      <li>
                        <Link href="/service1">NMTC</Link>
                      </li>
                      <li>
                        <Link href="/service2">IJSO</Link>
                      </li>
                    </ul>
                  )}
                </li>
                <hr className={styles.mobileDivider} />
                <li>
                  <div
                    className={styles.mobileMenuItem}
                    onClick={() => setExpandJEE(!expandJEE)}
                  >
                    Ace-JEE
                    <div className={styles.mobileMenuIcon}>
                      {expandJEE ? <FiMinus /> : <FiPlus />}
                    </div>
                  </div>
                  {expandJEE && (
                    <ul className={styles.mobileSubMenu}>
                      <li>
                        <Link href="/jee-mains">JEE Mains</Link>
                      </li>
                      <li>
                        <Link href="/product2">JEE Advanced</Link>
                      </li>
                    </ul>
                  )}
                </li>
                <hr className={styles.mobileDivider} />
                <li>
                  <div
                    className={styles.mobileMenuItem}
                    onClick={() => setExpandSchoolPro(!expandSchoolPro)}
                  >
                    School-Pro
                    <div className={styles.mobileMenuIcon}>
                      {expandSchoolPro ? <FiMinus /> : <FiPlus />}
                    </div>
                  </div>
                  {expandSchoolPro && (
                    <ul className={styles.mobileSubMenu}>
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
                <hr className={styles.mobileDivider} />
                <li className={styles.mobileMenuItem}>
                  <Link href="/contact">Ace-NEET</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      ) : (


    // Desktop Navbar
        <div className={styles.desktopNavbar}>
          <div className={styles.upperNavbar}>
            <div className={styles.logo}>
              <Link href="/">AceAcad</Link>
            </div>


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
                >
                  <FiChevronDown />
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


            <SearchBar
              searchQuery={searchQuery}
              onSearchQueryChange={handleSearchQueryChange}
              onSearchResults={handleSearchResults}
              inputplaceholder="Search for questions..."
            />
            <div className={styles.authButtons}>
              {session.data?.user ? (
                <>
                  <div style={{ cursor: "pointer" }}>
                    <UserProfileMenu
                      userImage={
                        session?.data?.user?.image
                          ? session.data?.user.image
                          : avatar
                      }
                    />
                  </div>
                  <button
                    onClick={() => signOut()}
                    className={styles.loginButton}
                  >
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
                </>
              )}
            </div>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default Navbar;
