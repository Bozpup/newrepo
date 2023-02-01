import React from "react";
import styles from "./../../styles/ForgotPassword/forgotPassword.module.css";

const ForgotPassword = () => {
  return (
    <section className={styles.forgotPasswordContainer}>
      <div className={styles.forgotPassword}>
        <h3>Forgot password</h3>
        <p>Please enter the email linked to your account</p>
        <form action="" className={styles.form}>
          <label htmlFor="">Email Address</label>
          <input type="email" placeholder="e.g. shuttlenaija@company.com" />
          <button className={styles.submit}>Done</button>
        </form>
        <p className={styles.foot}>
          Don't have an account? <span>Register</span>
        </p>
      </div>
    </section>
  );
};

export default ForgotPassword;
