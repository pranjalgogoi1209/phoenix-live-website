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
      <div className={styles.titleWrapper}>
        <div className={styles.titleContainer}>
          <h1>
            Just a sassy <br />{" "}
            <span>
              events <br /> agency
            </span>
          </h1>

          {/* <button>Book an Event</button> */}
        </div>
      </div>

      {/* video */}
      <video autoPlay muted loop className={styles.videoContainer}>
        <source src={video} />
      </video>

      {/* manual logo slider */}
      <div className={styles.manualLogo}>
        <h2>Who we hang out with</h2>

        <div className={styles.swiperContainer}>
          <button className={styles.navigationButton} onClick={navigateLeft}>
            <MdKeyboardArrowLeft />
          </button>
          <Swiper
            ref={swiperRef}
            loop={true}
            // minwidth
            /* breakpoints={{
            576: {
              slidesPerView: 3,
              spaceBetween: 50,
              coverflowEffect: {
                rotate: 40,
              },
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 50,
              coverflowEffect: {
                rotate: 40,
              },
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 90,
              coverflowEffect: {
                rotate: 50,
              },
            },
          }} */
            spaceBetween={0}
            slidesPerView={5}
            className={styles.swiper}
          >
            {logos &&
              logos.map(logo => (
                <SwiperSlide key={logo} className={styles.swiperSlide}>
                  <div className={styles.logoContainer}>
                    <img src={logo} alt="logo" />
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>

          <button className={styles.navigationButton} onClick={navigateRight}>
            <MdKeyboardArrowRight />
          </button>
        </div>
        {/* horizontal line */}
        <hr />
      </div>
    </section>
  );
}
