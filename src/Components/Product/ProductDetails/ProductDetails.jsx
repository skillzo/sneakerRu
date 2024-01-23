import React from "react";
import "./productdetails.css";
import { BasicRating, IconCheckboxes } from "../../UI/CheckBox";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useShop } from "../../../Store/AuthContext";
import { ACTIONS } from "../../../Store/AuthContext";
import { useState } from "react";
import toast from "react-hot-toast";

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
  const { dispatch } = useShop();
  const [sneakerMeasurement, setSneakerMeasurement] = useState(1);
  const [sneakerSize, setSneakerSize] = useState(40);

  const addToCart = (currItem) => {
    dispatch({
      type: ACTIONS.ADD_TO_CART,
      payload: {
        currItem: { currItem, size: sneakerSize },
        total: currItem.estimatedMarketValue,
      },
    });
    toast.success("Added to cart");
  };

  const sizeBy = [
    {
      measurement: 4.67,
      name: "US",
    },
    {
      measurement: 5.25,
      name: "UK",
    },
    {
      measurement: 1,
      name: "EU",
    },
  ];
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
            {sizeBy.map((i, idx) => (
              <div
                className={
                  i.measurement === sneakerMeasurement
                    ? "product-size__type_active"
                    : "product-size__type"
                }
                key={idx}
                onClick={() => setSneakerMeasurement(i.measurement)}
              >
                {i.name}
              </div>
            ))}
          </div>
        </div>

        <div className="product-type product-size__main">
          {[37, 38, 39, 40, 41, 42].map((size, idx) => (
            <div
              className={size === sneakerSize ? "size_active" : "size"}
              key={idx}
              onClick={() => setSneakerSize(size)}
            >
              {(size / sneakerMeasurement)?.toFixed(1)}
            </div>
          ))}
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
