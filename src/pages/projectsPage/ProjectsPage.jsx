/** @format */

import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./projectsPage.module.css";

export default function ProjectsPage() {
  // const history = useHistory();
  const location = useLocation();
  const { title, images } = location.state;

  const handleImageClick = () => {
    // Handle image click, for example, navigate to a detailed view
    // history.push(`/project/${image.id}`);
  };

  return (
    <div className={styles.ProjectsPage}>
      <h2>{title}</h2>
      <div className={styles.projectContainer}>
        {images.map((image, index) => (
          <div
            className={styles.imageContainer}
            key={index}
            onClick={() => handleImageClick(image)}>
            <img
              src={image}
              className={styles.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
