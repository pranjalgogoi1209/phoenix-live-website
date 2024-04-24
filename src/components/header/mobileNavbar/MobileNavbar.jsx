/** @format */

import React, { useState, useEffect } from "react";
import styles from "./mobileNavbar.module.css"; // Import CSS module
import { Link } from "react-router-dom";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", closeNavbar);

    return () => {
      document.removeEventListener("click", closeNavbar);
    };
  }, []);

  const handleNavbarClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div>
      <div
        className={styles["icon-container"]}
        onClick={toggleNavbar}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"
          alt="Menu"
          className={styles["icon"]}
        />
      </div>
      <ul
        className={`${styles["openlist"]} ${
          isOpen ? styles["show"] : styles["none"]
        }`}
        onClick={handleNavbarClick}>
        <li>
          <Link
            to={"/"}
            onClick={closeNavbar}>
            <li>Home</li>
          </Link>
        </li>
        <li>
          <Link
            to={"/about"}
            onClick={closeNavbar}>
            <li>About</li>
          </Link>
        </li>

        <li>
          <a
            href="#footer"
            onClick={closeNavbar}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
