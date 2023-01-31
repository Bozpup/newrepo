import React from "react";
import styles from "../../styles/whyShuttle.module.css";
import WhyShuttleCard from "./WhyShuttleCard";
import bus from "../../assets/icons/OrangeBusIcon.svg";
import dollar from "../../assets/icons/DollarIcon.svg";
import padlock from "../../assets/icons/PadlockIcon.svg";

const WhyShuttle = () => {
  return (
    <div className={styles.why__container}>
      <div className={styles.why__container_main}>
        <div className={styles.why__texts}>
          <div>
            <h2>
              Why <span> Shuttle 9ja? </span>
            </h2>

            <h1>Created exclusively for bus passengers</h1>
          </div>
        </div>
        <div className={styles.why__cards}>
          <div className={styles.why__cards_main}>
            <WhyShuttleCard
              header={"Book Bus trips"}
              label={"Guaranteed and effective response 24/7."}
              icon={bus}
            />
          </div>
          <div className={styles.why__cards_main}>
            <WhyShuttleCard
              header={"Affordable"}
              label={"Get bus rides for cheaper prices."}
              icon={dollar}
            />
          </div>
          <div className={styles.why__cards_main}>
            <WhyShuttleCard
              header={"Security"}
              label={"Pay for bus trips in secure ways."}
              icon={padlock}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyShuttle;
