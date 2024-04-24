/** @format */

import styles from "./whatWeDo.module.css";
// import "swiper/css/pagination";

import LogoSlider from "./logoSlider/LogoSlider";

import whatWeDoArr from "./../../../data/home/whatWeDo";

export default function WhatWeDo() {
  return (
    <section className={styles.WhatWeDo}>
      {/* logo slider */}
      <LogoSlider />

      {/* what we do */}
      <div className={styles.WhatWeDoContainer}>
        <h2 data-aos="fade-up" className={styles.heading}>
          We create <br /> bespoke experiences
        </h2>
        <div data-aos="fade-up" className={styles.parent}>
          {whatWeDoArr?.map((item, index) => (
            <div key={index} className={styles.singleCard}>
              {/*  <div className={styles.imgContainer}>
                  <img src={item.img} alt="what we do" />
                </div> */}
              <div className={styles.content}>
                <h3 className={styles.contentHeading}>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
