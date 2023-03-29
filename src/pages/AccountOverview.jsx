import React from "react";
import styles from "../styles/accountOverview.module.css";
import userimg from "../assets/svgs/userimg.svg";
import house from "../assets/svgs/house.svg";

import pen from "../assets/svgs/pen.svg";
import lock from "../assets/svgs/lock.svg";

import Footer from "../components/layout/Footer";
import MainNavigation from "../components/layout/MainNavigation";

<meta name="viewport" content="width=device-width, initial-scale=1.0" />;

const accountOverview = () => {
  return (
    <div className={styles.accountOverview}>
      <div className={styles.header}>
        <MainNavigation />
      </div>

      <div className={styles.sideNav}></div>
      <div>
        <div className={styles.navtxt1}>
          <img className={styles.house} alt={""} src={house} />
          <p style={{ position: "absolute", left: "40px" }}>Account overview</p>
        </div>
        <div className={styles.navtxt2}>
          <img className={styles.pen} alt={""} src={pen} />
          <p style={{ position: "absolute", left: "40px" }}>Edit proflie</p>
        </div>
        <div className={styles.navtxt3}>
          <img className={styles.lock} alt={""} src={lock} />
          <p style={{ position: "absolute", left: "40px" }}>Change password</p>
        </div>
      </div>
      <div className={styles.accountDetails}>
        <p className={styles.userinfo}>Account Overview</p>
        <img className={styles.useri} alt={""} src={userimg} />
        <p className={styles.txt1}>Okpala Oluwayimisola </p>

        <p className={styles.txt2}>
          <b>Email Address</b>
        </p>
        <p className={styles.uaddress}>oliyidekamsiyochukwu@gmail.com </p>
        <p className={styles.txt3}>
          <b>Phone Number</b>
        </p>
        <p className={styles.unumber}>+234 704 866 6531</p>
        <p className={styles.txt4}>
          <b>Gender</b>
        </p>
        <p className={styles.ugender}>Female</p>
        <p className={styles.txt5}>
          <b>Date of Birth</b>
        </p>
        <p className={styles.udob}>January 25, 2003</p>
        <button className={styles.editButton}>
          <span className={styles.edit}>Edit proflie</span>
        </button>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default accountOverview;
