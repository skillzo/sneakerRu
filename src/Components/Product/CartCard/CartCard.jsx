import React from "react";
import "./cartcard.css";
import Checkboxes from "../../UI/CheckBox";

function CartCard() {
  return (
    <div className="cartcard">
      <div>
        <Checkboxes />
      </div>
      <div className="cartcard-details">
        <div className="cartcard-name">
          Jordan 1 Retro Low OG SP Travis Scott Black Phantom
        </div>
        <div className="cardcard-quantity__details">
          <div className="cardcard-quantity">1x</div>
          <div className="cardcard-size">9.5</div>
          <div className="cardcard-Price">$100</div>
        </div>
      </div>
      <div className="cartcard-image">
        <img
          src="https://www.pricerunner.com/product/1200x630/3004239578/Nike-Air-Jordan-1-Retro-Low-OG-SP-x-Travis-Scott-Sail-Black-Dark-Mocha.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default CartCard;
