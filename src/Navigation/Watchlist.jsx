import React, { useEffect } from "react";
import { useShop } from "../Store/AuthContext";
import CartCard from "../Components/Product/CartCard/CartCard";
import HeaderCard2 from "../Components/Header/Header2/HeaderCard2";

function Watchlist() {
  const { state } = useShop();
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchList));
  }, [state.watchList]);
  return (
    <div className="cart-container">
      <HeaderCard2 content={"Watchlist"} count={state.watchList.length} />
      {state.watchList.map((product) => {
        console.log(product);
        return (
          <CartCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.estimatedMarketValue}
            image={
              product.image ||
              "https://www.pricerunner.com/product/1200x630/3004239578/Nike-Air-Jordan-1-Retro-Low-OG-SP-x-Travis-Scott-Sail-Black-Dark-Mocha.jpg"
            }
          />
        );
      })}
    </div>
  );
}

export default Watchlist;
