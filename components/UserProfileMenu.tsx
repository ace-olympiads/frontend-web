import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../styles/UserProfileMenu.module.css";
import { useAuth } from "../context/AuthContext";

interface UserProfileMenuProps {}

const UserProfileMenu: React.FC<UserProfileMenuProps> = () => {
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);
  const router = useRouter();
  const { user, logout } = useAuth();
  
  const openSubMenu = () => {
    setSubMenuOpen(true);
  };

  const closeSubMenu = () => {
    setSubMenuOpen(false);
  };

  return (
    <div
      className={`${styles["user-profile-menu"]} ${
        isSubMenuOpen ? styles.active : ""
      }`}
      onMouseEnter={openSubMenu}
      onMouseLeave={closeSubMenu}
    >
      <div className={styles["user-profile-icon"]}>
        <img 
          src={user?.image || "https://api.dicebear.com/7.x/pixel-art/svg"} 
          width={42} 
          height={42} 
          alt="" 
          className={styles.avatar}
        />
      </div>
      {isSubMenuOpen && (
        <div className={styles.submenu}>
          <ul>
            <li
              onClick={() => {
                router.push("/");
              }}
            >
              Dashboard
            </li>
            <li
              onClick={() => {
                router.push("/profile");
              }}
            >
              View Profile
            </li>
            <li
              onClick={() => {
                logout();
              }}
            >
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserProfileMenu;
