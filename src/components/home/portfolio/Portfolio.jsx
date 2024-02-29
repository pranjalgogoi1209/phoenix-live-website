import React from "react";
import styles from "./portfolio.module.css";
import { portfolio } from "../../../data/home/portfolio";
import riders from "./../../../assets/projects/riders-music-festival.jpg";

export default function Portfolio() {
  return (
    <div className={styles.Portfolio}>
      <h1>
        OUR <span>PROJECTS</span>
      </h1>
      <div className={styles.leftContainer}>
        <div className={styles.imgContainer}>
          <img src={riders} alt="riders" />
        </div>
        <div className={styles.title}>
          <strong>RIDERS MUSIC FESTIVAL</strong>
        </div>
      </div>

      <div className={styles.rightContainer}>
        <div className={styles.imgParent}>
          {portfolio?.map((item, index) => (
            <div>
              <div className={styles.imgContainer}>
                <img src={item.img} alt="project" />
              </div>
              <div className={styles.title}>
                <strong>{item.title.toUpperCase()}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
