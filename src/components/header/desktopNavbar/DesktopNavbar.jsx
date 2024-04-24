/** @format */

import React from "react";
import styles from "./desktopNavbar.module.css";
import { Link } from "react-router-dom";

export default function DesktopNavbar() {
  return (
    <nav className={styles.DesktopNavbar}>
      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/about"}>
          <li>About</li>
        </Link>
        <a href={"#footer"}>
          <li>Contact</li>
        </a>
      </ul>
    </nav>
  );
}
