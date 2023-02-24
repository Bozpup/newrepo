import React from "react";
// import Shuttle9ja from "./Shuttle9ja.svg";
import email from "../assets/svgs/email.svg";
import styles from "../styles/emailVerification.module.css";

const EmailVerification = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sideNav}>
        <img className={styles.img2} alt="" src={email}></img>
        <footer className={styles.footerSection}>
          If you don't see the message in your inbox, please check your spam
          folder or contact our support team for assistance.
        </footer>
      </div>
      <div className={styles.verify}>
        <h1 className={styles.heading}> Verify your e-mail address</h1>
        <p className={styles.paragraph}> Please enter the email linked to your account</p>
        <h3 className={styles.heading3}> Email Address</h3>
        <input type="text" className={styles.inputText}></input>
        <button className={styles.doneButton}>
          <span className={styles.done}>Done</span>
        </button>
        <h4 className={styles.heading4}>
          Already have an account? <span>Log in</span>
        </h4>
      </div>
    </div>
  );
};
export default EmailVerification;
