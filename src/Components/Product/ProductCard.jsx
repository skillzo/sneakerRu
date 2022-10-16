import React from "react";
import styles from "./productcard.module.css";
import { IconCheckboxes } from "../UI/CheckBox";
import { Link } from "react-router-dom";
function ProductCard({ brand, names, name2, price, image, id }) {
  return (
    <div className={styles.sneaker}>
      <div className={styles["sneaker-header"]}>
        <div className={styles["sneaker-watchlist"]}>
          <IconCheckboxes />
        </div>
        <div className={styles["sneaker-brand"]}>
          {brand === "Nike" ? (
            <img src="https://pngimg.com/uploads/nike/nike_PNG11.png" alt="" />
          ) : brand === "Jordan" ? (
            <img
              src="https://assets.stickpng.com/images/584292c4a6515b1e0ad75aca.png"
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
      <div className={styles["sneaker-image"]}>
        <img src={image} alt="" />
      </div>
      {/* {image === "" ? (
        <div className={styles["sneaker-image"]}>
          <img src={backUpSneakers[randomNumber]} alt="" />
        </div>
      ) : (
        <div className={styles["sneaker-image"]}>
          <img src={image} alt="" />
        </div>
      )} */}
      <Link to={`/product/${id}`}>
        <div className={styles["sneaker-details"]}>
          <div className={styles["sneaker-name"]}>{names}</div>
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
