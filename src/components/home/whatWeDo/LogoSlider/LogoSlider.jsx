/** @format */

import React, { useRef } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import styles from "./LogoSlider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { logosArr } from "../../../../data/home/logoSlider";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "./pagination.css";

export default function LogoSlider() {
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
    <div className={styles.LogoSlider}>
      <h2>Who we hang out with</h2>

      <div className={styles.swiperContainer}>
        <button
          className={styles.navigationButton}
          onClick={navigateLeft}>
          <MdKeyboardArrowLeft />
        </button>
        <Swiper
          ref={swiperRef}
          loop={true}
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          // pagination={{ clickable: true }}
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
          className={styles.swiper}>
          {logosArr?.map((logo) => (
            <SwiperSlide
              key={logo}
              className={styles.swiperSlide}>
              <div className={styles.logoContainer}>
                <img
                  src={logo}
                  alt="logo"
                />
              </div>
            </SwiperSlide>
          ))}
          {/* <div className="swiper-pagination"></div> */}
        </Swiper>

        <button
          className={styles.navigationButton}
          onClick={navigateRight}>
          <MdKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
}
