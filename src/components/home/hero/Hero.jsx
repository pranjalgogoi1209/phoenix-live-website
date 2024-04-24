import React from "react";
import styles from "./hero.module.css";
import video from "./../../../assets/home/hero/intro-video.mp4";

export default function Hero() {
  return (
    <section className={styles.Hero}>
      {/* title */}
      <div className={styles.titleWrapper}>
        <div className={styles.titleContainer}>
          <h1>
            Just a sassy <br />{" "}
            <span>
              events <br /> agency
            </span>
          </h1>
        </div>
      </div>

      {/* video */}
      <video autoPlay muted loop className={styles.videoContainer}>
        <source src={video} />
      </video>
    </section>
  );
}
