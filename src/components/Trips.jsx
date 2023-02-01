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
          <div className={styles.image}>
            <Search />
          </div>
          <hr />
          {/* <hr /> */}
          <div className={styles.image}>
            <Bus />
          </div>
          <hr />
          <div className={styles.image}>
            <Card />
          </div>
          <hr />
          <div className={styles.image}>
            <Ticket />
          </div>
        </div>

        <div className={styles.contents}>
          <p>Search destination</p>
          <p style={{ paddingLeft: "120px" }}>Select & book bus</p>
          <p style={{ paddingLeft: "110px" }}>Make payment</p>
          <p style={{ marginLeft: "120px" }}>Get ticket</p>
        </div>
      </div>
    </>
  );
};

export default Trips;
