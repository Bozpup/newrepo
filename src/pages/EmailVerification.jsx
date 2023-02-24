import React from "react";
// import Shuttle9ja from "./Shuttle9ja.svg";
import email from "../assets/svgs/email.svg";
import styles from "../styles/emailVerification.module.css";

const EmailVerification = () => {
  return (
    <div className={styles.wrapper}>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>

      <style>
        @import
        url('https://fonts.googleapis.com/css?family=Poppins:400,700,900');
      </style>
      <div className={styles.sideNav}>
        <img className={styles.img2} alt="" src={email}></img>
        <footer>
          If you don't see the message in your inbox, please check your spam
          folder or contact our support team for assistance.
        </footer>
      </div>
      <div className={styles.verify}>
        <h1> Verify your e-mail address</h1>
        <p> Please enter the email linked to your account</p>
        <h3> Email Address</h3>
        <input type="text"></input>
        <button>
          <span className={styles.done}>Done</span>
        </button>
        <h4>
          Already have an account? <span>Log in</span>
        </h4>
      </div>
    </div>
  );
};
export default EmailVerification;
