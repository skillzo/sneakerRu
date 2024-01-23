import React from "react";
import { ACTIONS, useShop } from "../Store/AuthContext";
import CartCard from "../Components/Product/CartCard/CartCard";
import HeaderCard2 from "../Components/Header/Header2/HeaderCard2";

function Watchlist() {
  const { state, dispatch } = useShop();

  const removeFromWatchlist = (currItem) => {
    dispatch({
      type: ACTIONS.REMOVE_FROM_WATCHLIST,
      payload: { currItem },
    });
  };

  return (
    <div className="cart-container">
      <HeaderCard2 content={"Watchlist"} count={state?.watchList.length} />

      {state.watchList.map((product) => {
        return (
          <CartCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.estimatedMarketValue}
            image={product.image}
            product={product}
            onDelete={() => removeFromWatchlist(product)}
          />
        );
      })}
    </div>
  );
}

export default Watchlist;
