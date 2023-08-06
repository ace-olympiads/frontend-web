import React, { useEffect, useState } from "react";
import styles from "../styles/Navbar.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";
import { signOut } from "next-auth/react";
import Link from "next/link";
const Navbar = () => {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const toggleDropdown = (tabIndex: number) => {
    setActiveTab(activeTab === tabIndex ? null : tabIndex);
  };
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>ITI AGNIHOTRI</div>
      <ul className={styles["nav-links"]}>
        <li>
          <Link href="/">Home</Link>
        </li>
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
            ▼
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
            ▼
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
            ▼
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
      <div className={styles.authButtons}>
        <button
          onClick={() => router.push("/auth")}
          className={styles.loginButton}
        >
          Login
        </button>
        <button
          onClick={() => router.push("/auth")}
          className={styles.signupButton}
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
