/** @format */

import React, { useRef } from "react";
import styles from "./hero.module.css";
import video from "./../../../assets/home/hero/intro-video.mp4";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { logos } from "../../../data/home/hero";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function Hero() {
  const swiperRef = useRef(null);

  const navigateLeft = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const navigateRight = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section className={styles.Hero}>
      {/* title */}
      {/* Just a sassy events agency */}
      <div className={styles.titleWrapper}>
        <div className={styles.titleContainer}>
          <h1>
            Just a sassy <br /> <span>events agency</span>
          </h1>
        </div>
      </div>
      {/* video */}
      <video
        autoPlay
        muted
        loop
        className={styles.videoContainer}>
        <source src={video} />
      </video>
    </section>
  );
}
