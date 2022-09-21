import React from "react";
import styles from "./wrapper.module.css";

function Wrapper({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}

export default Wrapper;
