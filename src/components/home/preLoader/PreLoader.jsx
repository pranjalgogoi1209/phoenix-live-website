import React, { useState, useEffect, useRef } from "react";
import styles from "./preLoader.module.css";
import animatedLogo from "./../../../assets/preLoader/animatedLogo.mp4";
import whiteLogo from "./../../../assets/preLoader/whiteLogo.png";

export default function PreLoader() {
  const [isPlay, setIsPlay] = useState(true);
  const preloaderRef = useRef(null);


  useEffect(() => {
    const preloader = setTimeout(() => {
      preloaderRef.current.style.display = "none";
    }, 6000);

    return () => clearTimeout(preloader);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPlay(false);
    }, 4400);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isPlay) {
      document.body.classList.add(styles.noScroll);
      window.scrollTo(0, 0);
    } else {
      document.body.classList.remove(styles.noScroll);
      window.scrollTo(0, 0);
    }
  }, [isPlay]);

  return (
    <div className={styles.PreLoader} ref={preloaderRef}>
      {isPlay ? (
        <video autoPlay muted loop className={styles.animatedLogoContainer} >
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
