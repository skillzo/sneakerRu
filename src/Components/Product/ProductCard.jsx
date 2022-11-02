import React from "react";
import styles from "./productcard.module.css";
import { IconCheckboxes } from "../UI/CheckBox";
import { Link } from "react-router-dom";
import { ACTIONS, useShop } from "../../Store/AuthContext";
function ProductCard({ brand, names, name2, price, image, currItem, id }) {
  const { dispatch } = useShop();
  return (
    <div className={styles.sneaker}>
      <div className={styles["sneaker-header"]}>
        <div
          onClick={() =>
            dispatch({
              type: ACTIONS.ADD_TO_WATCHLIST,
              payload: { currItem: currItem },
            })
          }
          className={styles["sneaker-watchlist"]}
        >
          <IconCheckboxes />
        </div>
        <div className={styles["sneaker-brand"]}>
          {brand === "Nike" ? (
            <img src="https://pngimg.com/uploads/nike/nike_PNG11.png" alt="" />
          ) : brand === "Jordan" ? (
            <img
              src="https://thekickzstand.com.au/wordpress/wp-content/uploads/2020/12/1200px-Jumpman_logo.svg_.png"
              alt=""
            />
          ) : brand === "New Balance" ? (
            <img
              src="https://e7.pngegg.com/pngimages/894/953/png-clipart-new-balance-brand-shoe-logo-sneakers-business-text-retail.png"
              alt=""
            />
          ) : brand === "Converse" ? (
            <img
              src="https://e7.pngegg.com/pngimages/490/1008/png-clipart-t-shirt-chuck-taylor-all-stars-converse-crew-neck-logo-t-shirt-emblem-fashion-thumbnail.png"
              alt=""
            />
          ) : brand === "adidas" ? (
            <img
              src="https://toppng.com/uploads/preview/adidas-logo-png-adidas-11563653245c6zmdnvsld.png"
              alt=""
            />
          ) : (
            <img src="https://pngimg.com/uploads/nike/nike_PNG11.png" alt="" />
          )}
        </div>
      </div>
      <Link to={`/product/${id}`}>
        <div className={styles["sneaker-image"]}>
          <img src={image} alt="" />
        </div>
        <div className={styles["sneaker-details"]}>
          <div className={styles["sneaker-name"]}>{names.slice(0, 47)}</div>
          <div className={styles["sneaker-type"]}>
            <div className={styles["sneaker-silhouette"]}>{name2}</div>
            <div className={styles["sneaker-price"]}>${price}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
