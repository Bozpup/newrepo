import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {} from "react-icons/fa";
import styles from "./../styles/forgotPassword.module.css";

const ForgotPassword = () => {
  const [showLink, setShowLink] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .label("Email")
        .email("Invalid email format")
        .required("Email is a required field"),
    }),
    onSubmit: function (values, { resetForm }) {
      alert(`A reset password link has been sent to ${values.email}!`);
      resetForm();
      setShowLink(true);
    },
  });

  return (
    <section className={styles.forgotPasswordContainer}>
      <div className={styles.forgotPassword}>
        <span></span>
        <h3>Forgot password</h3>
        <p>Please enter the email linked to your account</p>
        <form action="" className={styles.form} onSubmit={formik.handleSubmit}>
          <label htmlFor="">Email Address</label>
          <input
            type="email"
            placeholder="e.g. shuttlenaija@company.com"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            id="email"
          />
          {formik.touched.email && formik.errors.email && (
            <p className={styles.error}>{formik.errors.email}</p>
          )}
          {showLink ? <p className={styles.link}>resend link</p> : ""}
          <button className={styles.submit} type={"submit"}>
            Done
          </button>
        </form>
        <p className={styles.foot}>
          Don't have an account? <span>Register</span>
        </p>
      </div>
    </section>
  );
};

export default ForgotPassword;
