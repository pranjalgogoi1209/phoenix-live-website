/**
 * eslint-disable react/no-unescaped-entities
 *
 * @format
 */

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/** @format */

import React, { useState } from "react";
import styles from "./aboutPage.module.css";
import list from "./peoplelovesection";
import card1 from "../../assets/about/cards/Cards-01.png";
import card2 from "../../assets/about/cards/Cards-02.png";
import card3 from "../../assets/about/cards/Cards-03.png";
import card4 from "../../assets/about/cards/Cards-04.png";
import card5 from "../../assets/about/cards/Cards-05.png";
import imageOne from "../../assets/about/bgf.png";
import SimpleBackdrop from "../../components/SimpleBackDrop";

const PeopleCard = ({ item }) => {
  let [hover, setHover] = useState(false);
  return (
    <div
      className={styles.peopleLoveItem}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <span className={styles.peopleLoveSectionIcon}>
        <img
          src={hover ? item.colorimg : item.blackimg}
          alt="peopleLoveSectionIcon"
          loading="lazy"
        />
      </span>
      <div className={styles.rightPeopleLoveItem}>
        <span className={styles.heading}>{item.title}</span>
        <span className={styles.description}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, ad.
        </span>
      </div>
    </div>
  );
};

export default function AboutPage() {
  return (
    <>
      <SimpleBackdrop />
      <div className={styles.hero}>
        <div className={styles.aboutHero}>
          <div
            className={styles.heroImage}
            data-aos="zoom-out-up">
            <h1 className={styles.heroHeading}>About Us</h1>
          </div>
        </div>
        <div className={styles.aboutMainContent}>
          <div
            className={styles.imageDiv}
            data-aos="fade-right">
            <img
              loading="lazy"
              className={styles.imageOne}
              src={imageOne}
            />
          </div>
          <div
            className={styles.meetupInfo}
            data-aos="fade-left">
            <h1 className={styles.mainHeading}>Who We Are ?</h1>
            <p className={styles.paragraph}>
              An upbeat agency committed to streamlining your events, infusing
              vibrancy, and delivering concise experiences.
            </p>
            <p className={styles.paragraph}>
              {" "}
              Phoenix prioritizes solutions, delivering comprehensive outcomes
              for partners and brands.
            </p>
            <p className={styles.paragraph}>
              With unwavering enthusiasm, we craft turnkey solutions for every
              challenge, engaging your audience from start to finish.
            </p>
          </div>
        </div>
        <div className={styles.peopleLove}>
          <div className={styles.peopleLoveHeading}>
            <p>
              What <div className={styles.impactSecondRow}>People Love</div>{" "}
              <div className={styles.impactThirdRow}>
                About Us <div className={styles.horRow}> </div>
              </div>
            </p>
          </div>
          {list.map((item, index) => (
            <PeopleCard
              item={item}
              key={index}
            />
          ))}
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.imageMainContainer}>
            <div
              className={styles.spanContainer}
              data-aos="fade-right">
              <span className={styles.imageSpan}>
                <img
                  loading="lazy"
                  src={card1}
                />
              </span>
              <span className={styles.heading}>
                <h1>Corporate Events</h1>
              </span>
            </div>
            <div
              className={styles.spanContainer}
              data-aos="fade-right">
              <span className={styles.imageSpan}>
                <img
                  loading="lazy"
                  src={card4}
                />
              </span>
              <span className={styles.heading}>
                <h1>Experiential Events</h1>
              </span>
            </div>
            <div
              className={styles.spanContainer}
              data-aos="fade-right">
              <span className={styles.imageSpan}>
                <img
                  loading="lazy"
                  src={card5}
                />
              </span>
              <span className={styles.heading}>
                <h1>Curate & Manage IP's</h1>
              </span>
            </div>
            <div
              className={styles.spanContainer}
              data-aos="fade-right">
              <span className={styles.imageSpan}>
                <img
                  loading="lazy"
                  src={card3}
                />
              </span>
              <span className={styles.heading}>
                <h1>Virtual/Hybird Events</h1>
              </span>
            </div>
            <div
              className={styles.spanContainer}
              data-aos="fade-right">
              <span className={styles.imageSpan}>
                <img
                  loading="lazy"
                  src={card2}
                />
              </span>
              <span className={styles.heading}>
                <h1>Musical Tours</h1>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
