import React, { useState } from "react";
import styles from "./aboutPage.module.css";
import list from "./peoplelovesection";
import card1 from "../../assets/about/cards/Cards-01.png";
import card2 from "../../assets/about/cards/Cards-02.png";
import card3 from "../../assets/about/cards/Cards-03.png";
import card4 from "../../assets/about/cards/Cards-04.png";
import card5 from "../../assets/about/cards/Cards-05.png";
import lastImg01 from "./../../assets/about/lastImg01.png";
import lastImg02 from "./../../assets/about/lastImg02.png";
import lastImg03 from "./../../assets/about/lastImg03.png";
import lastImg04 from "./../../assets/about/lastImg04.png";
import lastImg05 from "./../../assets/about/lastImg05.png";

import imageOne from "../../assets/about/bgf.png";

const PeopleCard = ({ item }) => {
  let [hover, setHover] = useState(false);
  return (
    <div
      className={styles.peopleLoveItem}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span className={styles.peopleLoveSectionIcon}>
        <img
          src={hover ? item.colorimg : item.blackimg}
          alt="peopleLoveSectionIcon"
          loading="lazy"
        />
      </span>
      <span className={styles.heading}>{item.title}</span>
    </div>
  );
};

export default function AboutPage() {
  const lastSectionData = [
    {
      img: lastImg01,
      title: "Corporate Events",
    },
    {
      img: lastImg02,
      title: "Experiential Events",
    },
    {
      img: lastImg03,
      title: "Curate & Manage IP's",
    },
    {
      img: lastImg04,
      title: "Virtual/Hybird Events",
    },
    {
      img: lastImg05,
      title: "Musical Tours",
    },
  ];

  return (
    <div className={styles.AboutPage}>
      <div className={styles.heroImage} data-aos="zoom-out-up">
        <h2 className={styles.heroHeading}>About Us</h2>
      </div>
      <div className={styles.aboutMainContent}>
        {/* <div className={styles.imageDiv} data-aos="fade-right">
          <img loading="lazy" className={styles.imageOne} src={imageOne} />
        </div> */}
        <div className={styles.meetupInfo} data-aos="fade-up">
          <h1 className={styles.mainHeading}>Who We Are ?</h1>
          <p className={styles.paragraph}>
            An upbeat agency committed to streamlining your events, infusing
            vibrancy, and delivering concise experiences.
          </p>
          <p className={styles.paragraph}>
            Phoenix prioritizes solutions, delivering comprehensive outcomes for
            partners and brands.
          </p>
          <p className={styles.paragraph}>
            With unwavering enthusiasm, we craft turnkey solutions for every
            challenge, engaging your audience from start to finish.
          </p>
        </div>
      </div>

      {/* people love */}
      <div data-aos="fade-up" className={styles.peopleLove}>
        <div className={styles.peopleLoveHeading}>
          <p>What</p>
          <p className={styles.impactSecondRow}>People Love</p>
          <div className={styles.impactThirdRow}>
            <span className={styles.about}>About Us</span>
            <div className={styles.horRow}> </div>
          </div>
        </div>
        {list.map((item, index) => (
          <PeopleCard item={item} key={index} />
        ))}
      </div>

      {/* last section */}
      <div data-aos="fade-up" className={styles.imageMainContainer}>
        {lastSectionData?.map((item, index) => (
          <div key={index} className={styles.singleContainer}>
            <div className={styles.imgContainer}>
              <img loading="lazy" src={item.img} />
            </div>
            <p className={styles.title}>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
