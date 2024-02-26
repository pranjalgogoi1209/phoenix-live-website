import React from "react";
import styles from "./homePage.module.css";
import PreLoader from "../../components/home/preLoader/PreLoader.jsx";
import Hero from "../../components/home/hero/Hero.jsx";
import WhatWeDo from "../../components/home/whatWeDo/WhatWeDo.jsx";
import Portfolio from "../../components/home/portfolio/Portfolio.jsx";
import Services from "../../components/home/services/Services.jsx";

export default function HomePage() {
  return (
    <div className={styles.HomePage}>
      {/* pre loader */}
      <PreLoader />

      {/* hero section */}
      <Hero />

      {/* what we do */}
      <WhatWeDo />

      {/* portfolio */}
      <Portfolio />

      {/* services */}
      <Services />
    </div>
  );
}
