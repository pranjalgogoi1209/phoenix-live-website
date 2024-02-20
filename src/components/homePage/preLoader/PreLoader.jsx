import React, { useState } from "react";
import styles from "./preLoader.module.css";
import animatedLogo from "./../../../assets/preLoader/animatedLogo.mp4";
import whiteLogo from "./../../../assets/preLoader/whiteLogo.png";

export default function PreLoader() {
  const [isPlay, setIsPlay] = useState(true);

  setTimeout(() => {
    setIsPlay(false);
  }, [5000]);

  return (
    <div className={styles.PreLoader}>
      {isPlay ? (
        <video autoPlay muted loop className={styles.animatedLogoContainer}>
          <source src={animatedLogo} />
        </video>
      ) : (
        <div className={styles.logoContainer}>
          <img src={whiteLogo} alt="logo" />
        </div>
      )}
    </div>
  );
}
