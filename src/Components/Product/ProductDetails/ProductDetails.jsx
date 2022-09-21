import React from "react";
import "./productdetails.css";
import { BasicRating, IconCheckboxes } from "../../UI/CheckBox";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

function ProductDetails() {
  return (
    <div className="product-container">
      <div className="product-type">
        <div>Men</div>
        <div>
          {" "}
          <BasicRating />{" "}
        </div>
      </div>
      <div className="product-type product-detail">
        <div className="product-name">
          Wmns Air Jordan 1 Retro High OG 'Twist 2.0
        </div>
        <div className="product-price">
          <span>$</span> 235.00
        </div>
      </div>
      <div className="product-size">
        <div className="product-type product-size__details">
          <h3>Size:</h3>
          <div className="product-type">
            <div className="product-size__type"> US </div>
            <div className="product-size__type"> UK </div>
            <div className="product-size__type"> EU </div>
          </div>
        </div>
        <div className="product-type product-size__main">
          <div className="size">37</div>
          <div className="size">38</div>
          <div className="size">39</div>
          <div className="size">40</div>
          <div className="size">41</div>
          <div className="size">43</div>
        </div>
      </div>

      <div className=" product-type product-colors">
        <h3>Color:</h3>
        <div className="product-color__main">
          <div className="color color1"></div>
          <div className="color color2"></div>
          <div className="color color3"></div>
          <div className="color color4"></div>
          <div className="color color5"></div>
        </div>
      </div>

      <div className="product-description">
        <h3>Description</h3>
        <p>
          The women’s Air Jordan 1 Retro High OG ‘Twist 2.0’ presents the sequel
          to the AJ1 ‘Twist’ from 2019, featuring the same unique build but with
          a subtly refreshed palette. Like the older shoe, the upper pairs black
          pony hair with a smooth leather underlay. The latter is updated in a
          light grey hue, replacing the crisp white finish of the original. A
          molded Wings logo in metallic silver shines on the lateral collar,
          adding a bit of polish to the neutral design.
        </p>
      </div>
      <div className="product-type add-to-cart">
        <IconCheckboxes />
        <button className="button1">
          <AddShoppingCartIcon sx={{ fontSize: 18, marginRight: "5px" }} />
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
