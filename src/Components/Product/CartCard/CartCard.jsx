import React from "react";
import "./cartcard.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { ACTIONS, useShop } from "../../../Store/AuthContext";

function CartCard({ name, price, image, count, currItem, size, product }) {
  const { state, dispatch } = useShop();

  // //////////////////////////
  const removeFromCart = (currItem) => {
    if (currItem.count > 1) {
      console.log("removing item", currItem.count);
      currItem.count--;
      state.totalPrice -= currItem.estimatedMarketValue;
    } else {
      dispatch({
        type: ACTIONS.REMOVE_FROM_CART,
        payload: {
          currItem: currItem.id,
          total: currItem.estimatedMarketValue,
        },
      });
    }
  };

  ///////////////////////

  const removeFromWatchlist = (product) => {
    console.log("clicked");
    dispatch({
      type: ACTIONS.REMOVE_FROM_WATCHLIST,
      payload: { id: product.id },
    });
  };

  return (
    <div className="cartcard" onClick={() => removeFromWatchlist(product)}>
      <div className="cartcard-details">
        <div className="cartcard-details1">
          <div className="cartcard-name">{name}</div>
          <div className="cardcard-quantity__details">
            <div className="cardcard-quantity">{count}x</div>
            <div className="cardcard-size">{size}</div>
            <div className="cardcard-Price">${price}</div>
          </div>
        </div>
        <div className="cartcard-image">
          <img src={image} alt="" />
        </div>
      </div>

      <div className="cartcard-icon">
        <DeleteIcon
          sx={{ color: "#d8213b" }}
          onClick={() => removeFromCart(currItem)}
        />
      </div>
    </div>
  );
}

export default CartCard;
