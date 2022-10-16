import React from "react";
import styles from "./filter2.module.css";

function Filter2({ trending }) {
  return (
    <div className={styles.filter2}>
      <h3>{trending}</h3>
      <select className={styles["filter2-type"]}>
        <option value="men">Men</option>
        <option value="men">Women</option>
      </select>
    </div>
  );
}

export default Filter2;
