/** @format */
import "./portfolio.css";
import { useRef } from "react";
import styles from "./portfolio.module.css";
import { portfolio } from "../../../data/home/portfolio";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
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

  const handleProjectClick = (item) => {
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
              {/* navigation left */}
              {/* <button
                className={`${styles.navigationButton} ${styles.navigateLeft}`}
                onClick={navigateLeft}
              >
                <MdKeyboardArrowLeft />
              </button> */}

              <Swiper
                ref={swiperRef}
                loop={true}
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                /* autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }} */
                navigation
                pagination={{ clickable: true }}
                spaceBetween={0}
                slidesPerView={1}
                className={styles.swiper}
              >
                {item.img?.map((ite, ind) => (
                  <SwiperSlide key={ind} className={styles.swiperSlide}>
                    {ind === 0 && (
                      <video
                        // autoPlay
                        controls
                        // loop
                        className={`flex-row-center ${styles.swipeImgContainer}`}
                      >
                        <source src={ite} />
                      </video>
                    )}

                    {ind !== 0 && (
                      <div className={styles.swipeImgContainer}>
                        <img src={ite} alt="event" />
                      </div>
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* navigation right */}
              {/* <button
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
