import React from "react";
import { FaSearch, FaBus, FaTicketAlt, FaCreditCard } from "react-icons/fa";
import { ReactComponent as Card } from "../assets/svgs/card.svg";
import { ReactComponent as Bus } from "../assets/svgs/bus.svg";
import { ReactComponent as Search } from "../assets/svgs/search.svg";
import { ReactComponent as Ticket } from "../assets/svgs/ticket.svg";
import styles from "../styles/Trips.module.css";

const Trips = () => {
  return (
    <>
      <div>
        <h2 className={styles.title}>
          How to book a <span>Bus Trip</span>
        </h2>
        <div className={styles.content}>
          <div className={styles.wrapper}>
            <div className={styles.image}>
              <Search />
            </div>
            <p>Search destination</p>
          </div>
          <div className={styles.hr}/>
          <div className={styles.wrapper}>
            <div className={styles.image}>
              <Bus />
            </div>
            <p>Select & book bus</p>
          </div>
          <div className={styles.hr}/>
          <div className={styles.wrapper}>
            <div className={styles.image}>
              <Card />
            </div>
            <p>Make payment</p>
          </div>
          <div className={styles.hr}/>
          <div className={styles.wrapper}>
            <div className={styles.image}>
              <Ticket />
            </div>
            <p>Get ticket</p>
          </div>
        </div>

        
      </div>


    </>
  );
};

export default Trips;
