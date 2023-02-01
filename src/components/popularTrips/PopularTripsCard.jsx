import React from "react";
import { FaArrowRight, FaRegClock, FaBus, FaStar } from "react-icons/fa";
import popularTrips from "./popularTripsData";
import styles from "./../../styles/PopularTrips/popularTripsCard.module.css";

const PopularTripsCard = () => {
  return (
    <div>
      <div className={styles.pt_cards}>
        {popularTrips.map((data, index) => (
          <div className={styles.pt_card} key={index}>
            <div className={styles.pt_card__image}>
              <img src={data.image} alt="" />
              <p>{data.tramsco}</p>
            </div>
            <div className={styles.pt_card__body}>
              <div className={styles.pt_card__body__first}>
                <div className={styles.location}>
                  <p>{data.startLocation}</p>
                  <p>
                    <FaArrowRight />
                  </p>
                  <p>{data.destination}</p>
                </div>
                <div className={styles.duration}>
                  <p>
                    <FaRegClock />
                  </p>
                  <p>{data.duration}hrs</p>
                </div>
              </div>
              <div className={styles.pt_card__body__second}>
                <div className={styles.rating}>
                  <p>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </p>
                </div>
                <div className={styles.time}>
                  <p>
                    <FaBus />
                  </p>
                  <p>{`${data.startTime} - ${data.endTime}`}</p>
                </div>
              </div>
              <div className={styles.pt_card__body__third}>
                <p>&#8358; {data.price}</p>
              </div>
              <div className={styles.book_btn}>
                <button>Book</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularTripsCard;
