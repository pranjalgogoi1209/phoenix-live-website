import React from "react";
import styles from "./header.module.css";
import logo from "./../../assets/header/logo.png";
import DesktopNavbar from "./desktopNavbar/DesktopNavbar";
import MobileNavbar from "./mobileNavbar/MobileNavbar";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className={styles.Header}>
      {/* logo */}
      <Link to={"/"} className={styles.logoContainer}>
        <img src={logo} alt="logo" />
      </Link>

      {/* navbar */}
      <div className={styles.navbar}>
        <div className={styles.desktopNavbar}>
          <DesktopNavbar />
        </div>

        <div className={styles.mobileNavbar}>
          <MobileNavbar />
        </div>
      </div>
    </div>
  );
}
