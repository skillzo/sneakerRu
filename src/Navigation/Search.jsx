import React from "react";
import Filter1 from "../Components/Card/Filter/Filter1";
import SearchCard from "../Components/Card/Search/SearchCard";
import ProductCard from "../Components/Product/ProductCard";
import Wrapper from "../Components/UI/Wrapper/Wrapper";
import { apiData } from "../Store/ApiData";
import { ACTIONS, useShop } from "../Store/AuthContext";
import toast from "react-hot-toast";

function Search() {
  const { input, state, dispatch } = useShop();

  const searchData = apiData.filter((item) => {
    for (const value of Object.values(item)) {
      if (value.toString().toLowerCase().includes(input.toLowerCase()))
        return true;
    }
    return false;
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
    <Wrapper>
      <SearchCard />

      <Filter1 />
      <div className="sneaker-container">
        {searchData.map((product) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              names={product.name}
              name2={product.silhouette}
              price={product.estimatedMarketValue}
              image={product.image.small}
              onAdd={() => addToWatchlist(product)}
              currItem={product}
            />
          );
        })}
      </div>
    </Wrapper>
  );
}

// estimatedMarketValue: 0,

export default Search;
