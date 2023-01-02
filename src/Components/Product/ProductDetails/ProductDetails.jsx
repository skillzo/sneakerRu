import React from "react";
import "./productdetails.css";
import { BasicRating, IconCheckboxes } from "../../UI/CheckBox";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useShop } from "../../../Store/AuthContext";
import { ACTIONS } from "../../../Store/AuthContext";
import { useState } from "react";
import Popup from "../../Card/Popup/Popup";

function ProductDetails({
  gender,
  names,
  price,
  sku,
  releaseDate,
  story,
  stockX,
  goat,
  flightClub,
  currItem,
}) {
  const { state, dispatch } = useShop();
  const [shoeSize, setShoeSize] = useState(1);
  const [shoeCartSize, setShoeCartSize] = useState(40);
  const [popup, setPopup] = useState(false);

  // //////////////////////////
  const displayPopUp = () => {
    setPopup(true);
    setTimeout(() => {
      setPopup(false);
    }, 500);
  };

  const addToCart = (currItem) => {
    const isInCart = state.cart.find((item) => item.id === currItem.id);
    if (isInCart) {
      displayPopUp();
      isInCart.size = shoeCartSize;
      isInCart.count += 1;
      state.totalPrice += isInCart.estimatedMarketValue;
    } else {
      displayPopUp();
      dispatch({
        type: ACTIONS.ADD_TO_CART,
        payload: {
          currItem: currItem,
          total: currItem.estimatedMarketValue,
        },
      });
    }
  };
  return (
    <div className="product-container">
      <div className="product-type">
        <div className="gender">{gender.toUpperCase()}</div>
        <div>
          <BasicRating />
        </div>
      </div>
      <div className="product-type product-detail">
        <div className="product-name">{names}</div>
        <div className="product-price">${price}</div>
      </div>
      <div className="product-type">
        <h3>Sku:</h3>
        <div>{sku}</div>
      </div>
      <div className="product-type">
        <h3>Release Date:</h3>
        <div>{releaseDate}</div>
      </div>
      <div className="product-size">
        <div className="product-type product-size__details">
          <h3>Size:</h3>
          <div className="product-type">
            <div
              className="product-size__type"
              onClick={() => setShoeSize(4.67)}
            >
              US
            </div>
            <div
              className="product-size__type"
              onClick={() => setShoeSize(5.25)}
            >
              UK
            </div>
            <div className="product-size__type" onClick={() => setShoeSize(1)}>
              EU
            </div>
          </div>
        </div>
        <div className="product-type product-size__main">
          <div className="size" onClick={() => setShoeCartSize(37)}>
            {Math.floor(37 / shoeSize)}
          </div>
          <div className="size" onClick={() => setShoeCartSize(38)}>
            {Math.floor(38 / shoeSize)}
          </div>
          <div className="size" onClick={() => setShoeCartSize(39)}>
            {Math.floor(39 / shoeSize)}
          </div>
          <div className="size" onClick={() => setShoeCartSize(40)}>
            {Math.floor(40 / shoeSize)}
          </div>
          <div className="size" onClick={() => setShoeCartSize(41)}>
            {Math.floor(41 / shoeSize)}
          </div>
          <div className="size" onClick={() => setShoeCartSize(42)}>
            {Math.floor(42 / shoeSize)}
          </div>
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

      <div className="product-section2__container">
        <div className="product-description">
          <h3>Description</h3>
          <p>{story}</p>
        </div>
        <div className="product-links">
          <h3>Links:</h3>
          <div className="product-type links">
            <h4>StockX:</h4>
            <a href={stockX}>
              <button className="link-button">Link</button>
            </a>
          </div>
          <div className="product-type links">
            <h4>Goat:</h4>
            <a href={goat}>
              <button className="link-button">Link</button>
            </a>
          </div>
          <div className="product-type links">
            <h4>Fight Club:</h4>
            <a href={flightClub}>
              <button className=" link-button">Link</button>
            </a>
          </div>
        </div>
      </div>
      <div style={{ display: popup ? "block" : "none" }}>
        <Popup text="Added to cart" />
      </div>
      <div className="product-type add-to-cart">
        <IconCheckboxes />
        <button onClick={() => addToCart(currItem)} className="button1">
          <AddShoppingCartIcon sx={{ fontSize: 18, marginRight: "5px" }} />
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
