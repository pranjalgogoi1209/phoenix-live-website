import React from "react";
import styles from "./header.module.css";
import logo from "./../../assets/header/logo.png";
import DesktopNavbar from "./desktopNavbar/DesktopNavbar";
import MobileNavbar from "./mobileNavbar/MobileNavbar";

export default function Header() {
  return (
    <div className={styles.Header}>
      {/* logo */}
      <div className={styles.logoContainer}>
        <img src={logo} alt="logo" />
      </div>

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
