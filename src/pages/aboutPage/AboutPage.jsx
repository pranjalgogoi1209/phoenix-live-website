import React from "react";
import styles from "./aboutPage.module.css";
import WhoWeAre from "../../components/about/whoWeAre/WhoWeAre";
import Services from "../../components/about/Services";

export default function AboutPage() {
  return <div>
      {/* who we are */}
      <WhoWeAre />
      <Services/>
      {/*  */}
    </div>
  );

}
