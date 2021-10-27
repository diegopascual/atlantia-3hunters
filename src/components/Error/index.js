import React from "react";
import styles from "./Error.module.css";

const Error = ({ message = "An error occurred" }) => (
  <div className={styles.box} role="alert">
    {message}
  </div>
);

export default Error;
