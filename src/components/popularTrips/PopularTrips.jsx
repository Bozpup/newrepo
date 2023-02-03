import React from "react";
import PopularTripsCard from "./PopularTripsCard.jsx";
import styles from "./../../styles/PopularTrips/popularTrips.module.css";
import SearchFeature from "../SearchFeature.jsx";

const PopularTrips = () => {
  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "absolute" }}>
        <SearchFeature />
      </div>
      <div style={{
        paddingTop:'25%'
      }}>
        <section className={styles.popular_trips}>
          <h3>Popular Trips</h3>
          <p>Discover the trips in demand right now</p>
          <PopularTripsCard />
        </section>
      </div>
    </div>
  );
};

export default PopularTrips;
