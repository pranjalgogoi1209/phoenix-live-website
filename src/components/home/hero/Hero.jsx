import React from "react";
import styles from "./hero.module.css";
import video from "./../../../assets/home/hero/intro-video.mp4";
import "swiper/css";

export default function Hero() {
  return (
    <section className={styles.Hero}>
      <div data-aos="fade-right" className={styles.titleContainer}>
        <h1>
          Just a sassy <br /> <span>events agency</span>
        </h1>
      </div>
      {/* video */}
      <video
        data-aos="fade-left"
        autoPlay
        controls
        // loop
        aria-label="Introductory Video"
        className={`flex-row-center ${styles.videoContainer}`}
      >
        <source src={video} />
      </video>
    </section>
  );
}
