/**
 * eslint-disable no-unused-vars
 *
 * @format
 */

/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";
import logo from "./../../assets/whiteLogo.png";
import { PiMapPinLineLight } from "react-icons/pi";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import Tooltip from "@mui/material/Tooltip";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={styles.Footer} id="footer">
      <div className={styles.footerOne}>
        <p>Let's talk about the next wonderful event</p>
        <Link to="/contact" onClick={scrollToTop}>
          <button className="btn1">Contact Now</button>
        </Link>
      </div>

      <div className={styles.footerTwo}>
        <div className={styles.footerLogoContainer}>
          <Link to={"/"} onClick={scrollToTop}>
            <div className={styles.footerLogo}>
              <img src={logo} alt="footerLogo" />
            </div>
          </Link>
          <p>
            Just a sassy events agency committed to streamlining your events,
            infusing vibrancy, and delivering concise experiences.
          </p>
        </div>
        <div className={styles.explore}>
          <strong>EXPLORE</strong>
          <Link to={"/"} onClick={scrollToTop}>
            <p>Home</p>
          </Link>
          <Link to={"/about"} onClick={scrollToTop}>
            <p>About</p>
          </Link>
          <Link to={"/contact"} onClick={scrollToTop}>
            <p>Contact</p>
          </Link>
        </div>
        <div className={styles.footerContact}>
          <strong>CONTACT</strong>
          <address>
            <PiMapPinLineLight /> Plot No. 646 A, 3rd floor, <br /> Sathsurya
            Square, Rd Number 36, <br /> Jubilee Hills, Hyderabad -500033
          </address>
          <p>
            <IoCallOutline />{" "}
            <a href="tel:+8885500032" target="_blank">
              8885500032
            </a>{" "}
            /{" "}
            <a href="tel:+9885320004" target="_blank">
              9885320004
            </a>
          </p>
          <a href="mailto:humans@phoenixlive.in" target="_blank">
            <CiMail /> humans@phoenixlive.in
          </a>
          <div className={`flex-col-center ${styles.socialMediaParent}`}>
            <strong>FOLLOW US ON</strong>
            <div className={styles.socialMedia}>
              <a
                href="https://www.instagram.com/phoenixlive.in/?hl=en"
                target="_blank"
              >
                <FaInstagram />
              </a>
              <a href="#" target="_blank">
                <FaXTwitter />
              </a>
              <a
                href="https://www.linkedin.com/company/phoenixlive/"
                target="_blank"
              >
                <CiLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerThree}>
        <small>
          2024 Phoenix Experiences and Entertainment Services. All Rights
          Reserved.
        </small>
      </div>
    </div>
  );
}
