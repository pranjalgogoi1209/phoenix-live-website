import React from "react";
import styles from "./aboutPage.module.css";
import WhoWeAre from "../../components/about/whoWeAre/WhoWeAre";

export default function AboutPage() {
  return (
    <div className={styles.AboutPage}>
      {/* who we are */}
      <WhoWeAre />
    </div>
  );
}
