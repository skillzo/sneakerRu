import React from "react";
import styles from "./productcard2.module.css";

function ProductCard2({ brand, image }) {
  return (
    <div className={styles["product2-container"]}>
      <div className={styles["sneaker2-brand"]}>
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
      <div className={styles["sneaker2-image"]}>
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default ProductCard2;
