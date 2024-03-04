import React from "react";
import styles from "./whoWeAre.module.css";
import img01 from "./../../../assets/aboutPageHai/img01.png";
import img02 from "./../../../assets/aboutPageHai/img02.png";
import img03 from "./../../../assets/aboutPageHai/img03.png";
import img04 from "./../../../assets/aboutPageHai/img04.png";
import img05 from "./../../../assets/aboutPageHai/img05.png";
import img06 from "./../../../assets/aboutPageHai/img06.png";

export default function WhoWeAre() {
  const whoWeAreArr = [
    {
      img: img01,
      class: "big",
    },
    {
      img: img02,
      class: "small",
    },
    {
      img: img03,
      class: "small",
    },
    {
      img: img04,
      class: "big",
    },
    /*     {
      img: img05,
      class: "big",
    },
    {
      img: img06,
      class: "small",
    }, */
  ];
  return (
    <section className={styles.WhoWeAre}>
      <div className={styles.content}>
        <h1>Who We Are ?</h1>
        <p>
          An upbeat agency committed to streamlining your events, infusing
          vibrancy, and delivering concise experiences.
        </p>
        <p>
          Phoenix prioritizes solutions, delivering comprehensive outcomes for
          partners and brands.
        </p>
        <p>
          With unwavering enthusiasm, we craft turnkey solutions for every
          challenge, engaging your audience from start to finish.
        </p>
      </div>
      <div className={styles.imgContainer}>
        {whoWeAreArr?.map((item, index) => (
          <div key={index} className={styles[item.class]}>
            <img src={item.img} alt="image" />
          </div>
        ))}
      </div>
    </section>
  );
}
