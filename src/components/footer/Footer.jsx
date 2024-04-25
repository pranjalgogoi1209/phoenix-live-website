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
import { CiFacebook } from "react-icons/ci";
import { SlSocialTwitter } from "react-icons/sl";
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
            <PiMapPinLineLight /> India
          </address>
          <p>
            <IoCallOutline /> +122 167 265 455
          </p>
          <p>
            <CiMail /> humans@phoenix.com
          </p>
          <strong>FOLLOW US ON</strong>
          <div className={styles.socialMedia}>
            <CiFacebook />
            <SlSocialTwitter />
            <CiLinkedin />
          </div>
        </div>
      </div>

      <div className={styles.footerThree}>
        <small>© 2023 Phoneix MediaLtd. All rights reserved.</small>
      </div>
    </div>
  );
}
