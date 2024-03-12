/** @format */

import React, { useRef } from "react";
import styles from "./portfolio.module.css";
import { portfolio } from "../../../data/home/portfolio";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "../whatWeDo/LogoSlider/pagination.css";

export default function Portfolio() {
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
    <div className={styles.Portfolio}>
      <h1>
        OUR <span>PROJECTS</span>
      </h1>

      <div className={styles.eventContainer}>
        <div className={styles.parentEvent}>
          {portfolio?.map((item, index) => (
            <div
              className={styles[item.class]}
              key={index}>
              <div className={styles.imgContainer}>
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
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  pagination={{ clickable: true }}
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
                  slidesPerView={1}
                  className={styles.swiper}>
                  {item.img?.map((ite, ind) => (
                    <SwiperSlide
                      key={ind}
                      className={styles.swiperSlide}>
                      <div className={styles.swipeImgContainer}>
                        <img
                          src={ite}
                          alt="event"
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
              <div className={styles.content}>
                <h2>{item.title}</h2>
                <p>description...</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button>SEE ALL</button>
    </div>
  );
}
