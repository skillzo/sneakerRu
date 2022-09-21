import React from "react";
import CartFooter from "../Components/Footer/CartFooter";
import HeaderCard2 from "../Components/Header/Header2/HeaderCard2";
import CartCard from "../Components/Product/CartCard/CartCard";
import Wrapper from "../Components/UI/Wrapper/Wrapper";
import DeleteIcon from "@mui/icons-material/Delete";

function Cart() {
  return (
    <Wrapper>
      <HeaderCard2 content="Cart" icon=<DeleteIcon sx= {{color: "#d8213b"}} /> />
      <div className="cart-container">
        <CartCard />
        <CartCard />
      </div>
      <CartFooter />
    </Wrapper>
  );
}

export default Cart;
