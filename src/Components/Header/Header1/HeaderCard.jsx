import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./headercard.module.css";
import { Link } from "react-router-dom";
import { useShop } from "../../../Store/AuthContext";

function HeaderCard() {
  const d = new Date();
  const day = d.getDate();
  const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = d.getMonth();
  const year = d.getFullYear();
  const { state } = useShop();
  const counter = state.cart.reduce((a, b) => {
    return a + b.count;
  }, 0);
  return (
    <div className={styles.header}>
      <Link to="/search">
        <div>
          <SearchIcon />
        </div>
      </Link>
      <div className={styles["header-logo"]}>
        <div className={styles["header-logo__main"]}>
          Sneaker <span>RU</span>{" "}
        </div>
        <p>
          {day} {monthName[month]}, {year}
        </p>
      </div>
      <Link to="/cart">
        <div className={styles["header-cart"]}>
          <ShoppingCartIcon />{" "}
          <span className={styles["cart-count"]}>{counter}</span>
        </div>
      </Link>
    </div>
  );
}

export default HeaderCard;
