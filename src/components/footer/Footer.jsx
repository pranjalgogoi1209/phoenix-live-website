import React from "react";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.Footer}>
      <h1>Let's talk about the next wonderful event</h1>
      <div className={styles.contact}>
        <div>
          <p>humans@phoenix.com</p>
        </div>
        <div>
          <p>+122 167 265 455</p>
        </div>
      </div>

      <div className={styles.socialMedia}>
        <div>
          <p>Facebook</p>
        </div>
        <div>
          <p>Twitter</p>
        </div>
        <div>
          <p>Linkedin</p>
        </div>
      </div>

      <div className={styles.copyRight}>
        <p>© 2023 Phoneix MediaLtd. All rights reserved.</p>
      </div>
    </div>
  );
}
