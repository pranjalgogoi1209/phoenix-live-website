import React, { useRef } from "react";
import styles from "./whatWeDo.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import "swiper/css/pagination";
import "./pagination.css";

export default function WhatWeDo() {
  const swiperRef = useRef();

  const sliderData = [
    {
      number: "01",
      do: "We strategize",
    },
    {
      number: "02",
      do: "We design",
    },
    {
      number: "03",
      do: "We deliver",
    },
  ];

  return (
    <section className={styles.WhatWeDo}>
      <h1>We create bespoke experiences</h1>
      <div className={styles.swiperContainer}>
        <div className={styles.swiperParent}>
          <Swiper
            // centeredSlides={true}
            ref={swiperRef}
            loop={true}
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
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
            className={styles.swiper}
          >
            {sliderData.map((data, index) => (
              <SwiperSlide key={index} className={styles.swiperSlide}>
                <p>How we do it</p>
                <div className={styles.content}>
                  <p>{data.number}</p>
                  <h3>{data.do}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}
