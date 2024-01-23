import React from "react";
import "./navigation.css";
import Filter1 from "../Components/Card/Filter/Filter1";
import Filter2 from "../Components/Card/Filter/Filter2";
import ProductCard from "../Components/Product/ProductCard";
import HeaderCard from "../Components/Header/Header1/HeaderCard";
import { newApiData } from "../Store/ApiData";
import ProductCard2 from "../Components/Product/ProductCard2";
import { ACTIONS, useShop } from "../Store/AuthContext";
import toast from "react-hot-toast";

function MainHome() {
  const { state, input, dispatch } = useShop();

  const searchData = newApiData.filter((product) => {
    return product.brand.toLowerCase().includes(input.trim().toLowerCase());
  });

  const addToWatchlist = (currItem) => {
    const isInWatchList = state?.watchList?.find(
      (item) => item.id === currItem.id
    );

    dispatch({
      type: ACTIONS.ADD_TO_WATCHLIST,
      payload: { currItem: currItem },
    });
    toast.success(
      isInWatchList
        ? "Removed from  your  watchlist"
        : "Added to your  watchlist"
    );
  };

  return (
    <React.Fragment>
      <HeaderCard />
      <Filter1 />
      <Filter2 trending="New Arrivals" />

      <div className="sneaker-trending__container no-scrollbar">
        <div className="scroller">
          {searchData
            .slice(Math.random() * 5, Math.random() * 30)
            .map((product) => {
              return (
                <ProductCard2
                  key={product.id}
                  id={product.id}
                  brand={product.brand}
                  names={product.name}
                  name2={product.silhouette}
                  price={product.estimatedMarketValue}
                  image={product.image}
                />
              );
            })}
        </div>
      </div>

      <Filter2 trending="Popular" />
      <div className="sneaker-container">
        {searchData?.map((product) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              brand={product.brand}
              names={product.name}
              name2={product.silhouette}
              price={product.estimatedMarketValue}
              image={product.image}
              onAdd={() => addToWatchlist(product)}
              currItem={product}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default MainHome;
