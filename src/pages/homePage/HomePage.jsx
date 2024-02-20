import React from "react";
import styles from "./homePage.module.css";
import PreLoader from "../../components/homePage/preLoader/PreLoader.jsx";

export default function HomePage() {
  return (
    <div className={styles.HomePage}>
      {/* pre loader */}
      <PreLoader />
    </div>
  );
}
