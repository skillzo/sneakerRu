import React, { useEffect } from "react";
import CartFooter from "../Components/Footer/CartFooter";
import HeaderCard2 from "../Components/Header/Header2/HeaderCard2";
import CartCard from "../Components/Product/CartCard/CartCard";
import Wrapper from "../Components/UI/Wrapper/Wrapper";
import DeleteIcon from "@mui/icons-material/Delete";
import { useShop } from "../Store/AuthContext";

function Cart() {
  const { state } = useShop();
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
    localStorage.setItem("total", state.totalPrice);
  }, [state.cart, state.totalPrice]);
  return (
    <Wrapper>
      <HeaderCard2
        content="Cart"
        count={state.cart.length || 0}
        icon=<DeleteIcon
          sx={{ color: "#d8213b" }}
          onClick={() => {
            state.cart.length = 0;
            localStorage.removeItem("cart");
            localStorage.removeItem("total");
          }}
        />
      />
      <div className="cart-container">
        {state.cart.map((product) => {
          return (
            <CartCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.estimatedMarketValue}
              image={product.image}
              currItem={product.id}
            />
          );
        })}
      </div>
      <CartFooter />
    </Wrapper>
  );
}

export default Cart;
