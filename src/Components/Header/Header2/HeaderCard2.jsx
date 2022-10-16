import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import styles from "./headercard2.module.css";
import { useNavigate } from "react-router-dom";
import { useShop } from "../../../Store/AuthContext";

function HeaderCard2(props) {
  const { state } = useShop();
  const navigate = useNavigate();
  return (
    <div className={styles.header2}>
      <div onClick={() => navigate(-1)}>
        <ArrowBackIosNewIcon />
      </div>
      <div className={styles["header2-logo"]}>{props.content}</div>
      <div className={styles["header2-cart"]}>
        <div className={styles["header2-cart"]}>{props.icon}</div>
        <span className={styles["cart-count"]}>{props.count}</span>
      </div>
    </div>
  );
}

export default HeaderCard2;
