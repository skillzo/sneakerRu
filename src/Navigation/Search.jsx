import React from "react";
import Filter1 from "../Components/Card/Filter/Filter1";
import SearchCard from "../Components/Card/Search/SearchCard";
import ProductCard from "../Components/Product/ProductCard";
import Wrapper from "../Components/UI/Wrapper/Wrapper";
import { apiData } from "../Store/ApiData";
import { useShop } from "../Store/AuthContext";

function Search() {
  const { input } = useShop();

  const searchData = apiData.filter((item) => {
    for (const value of Object.values(item)) {
      if (value.toString().toLowerCase().includes(input.toLowerCase()))
        return true;
    }
    return false;
  });

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
