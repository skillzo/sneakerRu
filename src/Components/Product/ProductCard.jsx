import React from "react";
import styles from "./productcard.module.css";
import { IconCheckboxes } from "../UI/CheckBox";

function ProductCard() {
  return (
    <div className={styles.sneaker}>
      <div className={styles["sneaker-header"]}>
        <div className={styles["sneaker-watchlist"]}>
          <IconCheckboxes />
        </div>
        <div className={styles["sneaker-brand"]}>
          <img src="https://pngimg.com/uploads/nike/nike_PNG11.png" alt="" />
        </div>
      </div>
      <div className={styles["sneaker-image"]}>
        <img
          src="https://www.pricerunner.com/product/1200x630/3004239578/Nike-Air-Jordan-1-Retro-Low-OG-SP-x-Travis-Scott-Sail-Black-Dark-Mocha.jpg"
          alt=""
        />
      </div>
      <div className={styles["sneaker-details"]}>
        <div className={styles["sneaker-name"]}>
          Jordan 1 Retro Low OG SP Travis Scott Black Phantom
        </div>
        <div className={styles["sneaker-type"]}>
          <div className={styles["sneaker-silhouette"]}>Air Jordan </div>
          <div className={styles["sneaker-price"]}>$100</div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
