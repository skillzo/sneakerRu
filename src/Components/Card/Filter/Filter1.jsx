import React from "react";
import styles from "./filter.module.css";

function Filter1() {
  return (
    <div className={styles.filter}>
      <div className={styles["filter-brand"]}>Nike</div>
      <div className={styles["filter-brand"]}>Jordans</div>
      <div className={styles["filter-brand"]}>New Balance</div>
      <div className={styles["filter-brand"]}>Adidas</div>
    </div>
  );
}

export default Filter1;
