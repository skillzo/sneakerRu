import React from "react";
import styles from "./filter2.module.css";

function Filter2() {
  return (
    <div className={styles.filter2}>
      <h3>Popular</h3>
      <div className={styles["filter2-type"]}>Mens</div>
    </div>
  );
}

export default Filter2;
