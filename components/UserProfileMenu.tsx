import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "../styles/UserProfileMenu.module.css";

interface UserProfileMenuProps {
  userImage: string;
}

const UserProfileMenu: React.FC<UserProfileMenuProps> = ({ userImage }) => {
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);
  const router = useRouter();
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
        <Image src={userImage} width={42} height={42} alt="" />
      </div>
      {isSubMenuOpen && (
        <div className={styles.submenu}>
          <ul>
            <li
              onClick={() => {
                router.push("/profile");
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
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserProfileMenu;
