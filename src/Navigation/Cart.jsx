import React, { useEffect } from "react";
import CartFooter from "../Components/Footer/CartFooter";
import HeaderCard2 from "../Components/Header/Header2/HeaderCard2";
import CartCard from "../Components/Product/CartCard/CartCard";
import Wrapper from "../Components/UI/Wrapper/Wrapper";
import { ACTIONS, useShop } from "../Store/AuthContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";

function Cart() {
  const { state, dispatch } = useShop();
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
    localStorage.setItem("total", state.totalPrice);
  }, [state.cart, state.totalPrice]);

  console.log(state.cart);
  let counter = state.cart.reduce((a, b) => {
    return a + b.count;
  }, 0);

  const clearCart = () => {
    console.log("clicked");
    counter = 0;
    state.totalPrice = 0;
    dispatch({ type: ACTIONS.CLEAR_CART });
    localStorage.removeItem("cart" || "[]");
    localStorage.removeItem("total" || 0);
  };
  return (
    <Wrapper>
      <HeaderCard2
        content="Cart"
        count={counter || 0}
        icon=<ShoppingCartIcon />
      />
      <div className="cart-container">
        {state.cart.map((product) => {
          console.log(product);
          return (
            <CartCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.estimatedMarketValue}
              image={
                product.image.small ||
                "https://www.pricerunner.com/product/1200x630/3004239578/Nike-Air-Jordan-1-Retro-Low-OG-SP-x-Travis-Scott-Sail-Black-Dark-Mocha.jpg"
              }
              count={product.count}
              currItem={product}
              size={product.size}
            />
          );
        })}
      </div>
      <button className="button1" onClick={() => clearCart()}>
        <DeleteIcon sx={{ color: "#d8213b", fontSize: 20 }} />
        Clear cart
      </button>
      <CartFooter />
    </Wrapper>
  );
}

export default Cart;
