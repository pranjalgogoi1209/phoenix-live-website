/** @format */

import { useRef } from "react";
import styles from "./portfolio.module.css";
import { portfolio } from "../../../data/home/portfolio";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function Portfolio() {
  const swiperRef = useRef(null);
  const navigate = useNavigate();

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

  const handleProjectClick = item => {
    const data = {
      title: item.title,
      images: item.img,
    };
    navigate("/project", { state: data });
  };

  return (
    <div className={styles.Portfolio}>
      <h1 data-aos="fade-up">
        Our <span>Projects</span>
      </h1>

      <div className={styles.parentEvent}>
        {portfolio?.map((item, index) => (
          <div
            data-aos="zoom-out-up"
            className={styles[item.class]}
            key={index}
          >
            <div
              className={styles.imgContainer}
              // onClick={() => handleProjectClick(item)}
            >
              {/*  <button
                className={styles.navigationButton}
                onClick={navigateLeft}
              >
                <MdKeyboardArrowLeft />
              </button> */}

              <Swiper
                ref={swiperRef}
                loop={true}
                modules={[Autoplay, Pagination]}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                spaceBetween={0}
                slidesPerView={1}
                className={styles.swiper}
              >
                {item.img?.map((ite, ind) => (
                  <SwiperSlide key={ind} className={styles.swiperSlide}>
                    <div className={styles.swipeImgContainer}>
                      <img src={ite} alt="event" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/*  <button
                className={styles.navigationButton}
                onClick={navigateRight}
              >
                <MdKeyboardArrowRight />
              </button> */}
            </div>

            <div className={styles.content}>
              <h2>{item.title}</h2>
              {/* <p>description...</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
