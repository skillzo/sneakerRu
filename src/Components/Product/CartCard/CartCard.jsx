import React from "react";
import "./cartcard.css";
import Checkboxes from "../../UI/CheckBox";

function CartCard({ name, price, image }) {
  return (
    <div className="cartcard">
      <div>
        <Checkboxes />
      </div>
      <div className="cartcard-details">
        <div className="cartcard-name">{name}</div>
        <div className="cardcard-quantity__details">
          <div className="cardcard-quantity">1x</div>
          <div className="cardcard-size">40</div>
          <div className="cardcard-Price">${price}</div>
        </div>
      </div>
      <div className="cartcard-image">
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default CartCard;
