import React from "react";
import CartFooter from "../Components/Footer/CartFooter";
import HeaderCard2 from "../Components/Header/Header2/HeaderCard2";
import CartCard from "../Components/Product/CartCard/CartCard";
import Wrapper from "../Components/UI/Wrapper/Wrapper";
import DeleteIcon from "@mui/icons-material/Delete";
import { useShop } from "../Store/AuthContext";

function Cart() {
  const { state } = useShop();
  return (
    <Wrapper>
      <HeaderCard2
        content="Cart"
        icon=<DeleteIcon sx={{ color: "#d8213b" }} />
      />
      <div className="cart-container">
        {state.cart.map((product) => {
          return (
            <CartCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.estimatedMarketValue}
              image={product.image.small}
            />
          );
        })}
      </div>
      <CartFooter />
    </Wrapper>
  );
}

export default Cart;
