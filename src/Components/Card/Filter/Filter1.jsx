import React from "react";
import { useShop } from "../../../Store/AuthContext";
import styles from "./filter.module.css";

function Filter1() {
  const { setInput } = useShop();
  return (
    <div className={styles.filter}>
      <div
        onClick={() => {
          setInput("Nike");
        }}
        className={styles["filter-brand"]}
      >
        Nike
      </div>
      <div
        onClick={() => {
          setInput("Jordan");
        }}
        className={styles["filter-brand"]}
      >
        Jordans
      </div>
      <div
        onClick={() => {
          setInput("New Balance");
        }}
        className={styles["filter-brand"]}
      >
        New Balance
      </div>
      <div
        onClick={() => {
          setInput("adidas");
        }}
        className={styles["filter-brand"]}
      >
        Adidas
      </div>
    </div>
  );
}

export default Filter1;
