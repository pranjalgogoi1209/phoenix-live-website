import React, { useState, useEffect, useRef } from "react";
import styles from "./preLoader.module.css";
import animatedLogo from "./../../../assets/preLoader/animatedLogo.mp4";
import whiteLogo from "./../../../assets/preLoader/whiteLogo.png";

export default function PreLoader() {
  const [isPlay, setIsPlay] = useState(true);
  const preloaderRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (isPlay) {
      document.body.classList.add(styles.noScroll);
      window.scrollTo(0, 0);
    } else {
      document.body.classList.remove(styles.noScroll);
      window.scrollTo(0, 0);
    }
  }, [isPlay]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPlay(false);
    }, 4400);

    return () => clearTimeout(timer);
  }, [videoLoaded]);

  useEffect(() => {
    const preloader = setTimeout(() => {
      if (!isPlay) {
        preloaderRef.current.style.display = "none";
      }
    }, 1000);

    return () => clearTimeout(preloader);
  }, [isPlay]);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };
  console.log(videoLoaded);
  return (
    <div
      className={`${styles.PreLoader} ${isPlay ? styles.removePreLoader : ""}`}
      ref={preloaderRef}
    >
      {isPlay ? (
        <video
          autoPlay
          muted
          loop
          onLoadedMetadata={handleVideoLoaded}
          className={styles.animatedLogoContainer}
        >
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
