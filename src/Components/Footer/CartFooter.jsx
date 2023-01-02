import React from "react";
import "./cartfooter.css";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useShop } from "../../Store/AuthContext";

function CartFooter() {
  const { state } = useShop();
  return (
    <div className="cart-footer">
      <div className="cart-price">
        <span>$</span>
        {state.totalPrice}
      </div>
      <button className="button2 check-out">
        <ShoppingCartCheckoutIcon sx={{ fontSize: 18, marginRight: "5px" }} />
        Check Out
      </button>
    </div>
  );
}

export default CartFooter;
