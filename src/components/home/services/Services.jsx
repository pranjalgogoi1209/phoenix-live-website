/* eslint-disable react/no-unescaped-entities */
import styles from "./services.module.css";
import { services } from "../../../data/home/services";

export default function Services() {
  return (
    <div className={styles.Services}>
      <h2 data-aos={"fade-up"}>Tech Forward</h2>
      <p data-aos={"fade-up"}>
        We're committed to innovation, developing immersive products. our blend
        of in-house and sourced tech seamlessly integrates, enhancing audience
        engagement at your events.
      </p>
      {/* <div className={styles.slideWrapper}>
        <div className={styles.slideContainer}>
          {services?.map((item, index) => (
            <div className={styles.paraContainer} key={index}>
              <p>{item}</p>
            </div>
          ))}
        </div>
        <div className={styles.slideContainer}>
          {services?.map((item, index) => (
            <div className={styles.paraContainer} key={index}>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}
