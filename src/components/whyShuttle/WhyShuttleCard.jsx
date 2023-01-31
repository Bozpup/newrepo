import React from "react";
import styles from "../../styles/whyShuttleCard.module.css";

const WhyShuttleCard = ({ header, label, icon }) => {
  return (
    <div className={styles.why_card__container}>
      <div className={styles.iconContainer}>
        <img src={icon} alt="Bus" />
      </div>
      <div>
        <div>
          <p className={styles.why_card__header}>{header}</p>
          <p className={styles.why_card__title}>{label}</p>
        </div>
      </div>
    </div>
  );
};

export default WhyShuttleCard;
