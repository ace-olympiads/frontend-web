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
import axiosInstance from "../axios";

interface SearchResult {
  id: number;
  title: string;
  question_latex?: string;
  solution: string;
  solution_latex: string;
}

interface NavbarItem {
  id: number;
  name: string;
  display_name: string;
  children: NavbarItem[];
}

const Navbar = () => {
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const session = useSession();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // New state for navbar config
  const [navbarItems, setNavbarItems] = useState<NavbarItem[]>([]);
  const [expandedItems, setExpandedItems] = useState<{[key: string]: boolean}>({});

  // Fetch navbar configuration from Django backend
  useEffect(() => {
    axiosInstance.get('users/navbar-config/') // adjust to match your backend route
      .then(response => {
        setNavbarItems(response.data.navbar_items);
      })
      .catch(error => {
        console.error('Error fetching navbar:', error);
      });
  }, []);

  const toggleDropdown = (tabIndex: number) => {
    setActiveTab(activeTab === tabIndex ? null : tabIndex);
  };

  const handleSearchQueryChange = (newQuery: string) => {
    setSearchQuery(newQuery);
  };

  const handleSearchResults = (results: SearchResult[]) => {
    setSearchResults(results);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleMobileExpand = (itemName: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemName]: !prev[itemName]
    }));
  };

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

  // Render navigation items based on the config
  const renderNavItems = (items: NavbarItem[] = [], isMobileView: boolean = false) => {
    return items.map((item, index) => {
      const hasChildren = item.children && item.children.length > 0;
      const isExpanded = expandedItems[item.name] || false;
      
      // Generate URL from item name
      const itemUrl = `/${item.name.replace('_', '-')}`;
      
      if (isMobileView) {
        return (
          <React.Fragment key={item.id}>
            <li>
              <div
                className={styles.mobileMenuItem}
                onClick={() => hasChildren ? toggleMobileExpand(item.name) : null}
              >
                <Link href={hasChildren ? "#" : itemUrl}>{item.display_name}</Link>
                {hasChildren && (
                  <div className={styles.mobileMenuIcon}>
                    {isExpanded ? <FiMinus /> : <FiPlus />}
                  </div>
                )}
              </div>
              {hasChildren && isExpanded && (
                <ul className={styles.mobileSubMenu}>
                  {item.children.map(child => (
                    <li key={child.id}>
                      <Link href={`/${child.name.replace('_', '-')}`}>{child.display_name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <hr className={styles.mobileDivider} />
          </React.Fragment>
        );
      } else {
        return (
          <li
            key={item.id}
            className={hasChildren ? `${styles.dropdownToggle} ${activeTab === index ? styles.active : ""}` : ""}
            onMouseEnter={hasChildren ? () => toggleDropdown(index) : undefined}
            onMouseLeave={hasChildren ? () => toggleDropdown(index) : undefined}
          >
            <Link href={hasChildren ? "#" : itemUrl}>{item.display_name}</Link>
            {hasChildren && (
              <>
                <span
                  className={`${styles.dropdownIcon} ${activeTab === index ? styles.active : ""}`}
                >
                  <FiChevronDown />
                </span>
                {activeTab === index && (
                  <ul className={styles.dropdown}>
                    {item.children.map(child => (
                      <li key={child.id}>
                        <Link href={`/${child.name.replace('_', '-')}`}>{child.display_name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </li>
        );
      }
    });
  };

  return (
    <div className="navbar">
      {isMobile ? (
        <div className={styles.mobileNavbar}>
          <div className={styles.mobileTopNavbar}>
            <div className={styles.logo}>
              <Link href="/">AceAcad</Link>
            </div>
            <div className={styles.mobileIcons}>
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
                {renderNavItems(navbarItems, true)}
              </ul>
            </nav>
          </div>
        </div>
      ) : (
        <div className={styles.desktopNavbar}>
          <div className={styles.upperNavbar}>
            <div className={styles.logo}>
              <Link href="/">AceAcad</Link>
            </div>

            <nav className={styles.bottomNavbar}>
              <ul className={styles["nav-links"]}>
                {renderNavItems(navbarItems)}
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