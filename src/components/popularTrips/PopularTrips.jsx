import React from 'react';
import PopularTripsCard from './PopularTripsCard.jsx';
import styles from "./../../styles/popularTrips.module.css";

const PopularTrips = () => {
    return ( 
        <section className={styles.popular_trips}>
            <h3>Popular Trips</h3>
            <p>Discover the trips in demand right now</p>
            <PopularTripsCard />
        </section>
     );
}
 
export default PopularTrips;