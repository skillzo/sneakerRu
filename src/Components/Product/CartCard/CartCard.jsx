import React from "react";
import "./cartcard.css";
import DeleteIcon from "@mui/icons-material/Delete";

function CartCard({ name, price, image, count, size, onDelete, showQuantity }) {
  return (
    <div className="cartcard">
      <div className="cartcard-details">
        <div className="cartcard-details1">
          <div className="cartcard-name">{name}</div>

          <div className="cardcard-quantity__details">
            {showQuantity && <div className="cardcard-quantity">{count}x</div>}
            <div className="cardcard-size">{size}</div>
            <div className="cardcard-Price">${price}</div>
          </div>
        </div>
        <div className="cartcard-image">
          <img src={image} alt="" />
        </div>
      </div>

      <div className="cartcard-icon">
        <DeleteIcon sx={{ color: "#d8213b" }} onClick={onDelete} />
      </div>
    </div>
  );
}

export default CartCard;
