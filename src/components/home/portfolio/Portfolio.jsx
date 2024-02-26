import React from "react";
import styles from "./portfolio.module.css";
import { portfolio } from "../../../data/home/portfolio";

export default function Portfolio() {
  return (
    <div className={styles.Portfolio}>
      {portfolio?.map((item, index) => (
        <div className={`${styles.container}`} key={index}>
          <div
            className={`${styles.image}  ${styles[item.class]}`}
            style={{
              backgroundColor: `${item.bg}`,
            }}
          >
            <img
              src={item.img}
              alt="event"
              style={{
                borderColor: `${item.color}`,
              }}
            />
          </div>
          <h2>{item.title}</h2>
        </div>
      ))}
    </div>
  );
}
