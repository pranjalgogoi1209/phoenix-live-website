import React from "react";
import styles from "./services.module.css";
import { services } from "../../../data/home/services";

export default function Services() {
  return (
    <div className={styles.Services}>
      <h1>Tech Forward</h1>
      <p>
        We're committed to innovation, developing immersive products. our blend
        of in-house and sourced tech seamlessly integrates, enhancing audience
        engagement at your events.
      </p>
      <div className={styles.slideWrapper}>
        {/* <div className={styles.left}></div> */}

        <div className={styles.slideContainer}>
          {services?.map((item, index) => (
            <div className={styles.paraContainer} key={index}>
              <p>{item}</p>
            </div>
          ))}
        </div>
        <div className={styles.slideContainer}>
          {services?.map((item, index) => (
            <div className={styles.paraContainer} key={index}>
              <p>{item}</p>
            </div>
          ))}
        </div>

        {/* <div className={styles.right}></div> */}
      </div>
    </div>
  );
}
