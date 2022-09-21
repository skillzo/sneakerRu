import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./headercard.module.css";

function HeaderCard() {
  return (
    <div className={styles.header}>
      <div>
        <SearchIcon />
      </div>
      <div className={styles["header-logo"]}>
        <div className={styles["header-logo__main"]}>
          Sneaker <span>RU</span>{" "}
        </div>
        <p>20 September, 2020</p>
      </div>
      <div className={styles["header-cart"]}>
        <ShoppingCartIcon /> <span className={styles["cart-count"]}>3</span>
      </div>
    </div>
  );
}

export default HeaderCard;
