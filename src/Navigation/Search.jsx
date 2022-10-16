import React from "react";
import Filter1 from "../Components/Card/Filter/Filter1";
import SearchCard from "../Components/Card/Search/SearchCard";
import ProductCard from "../Components/Product/ProductCard";
import Wrapper from "../Components/UI/Wrapper/Wrapper";
import { apiData } from "../Store/ApiData";
import { useShop } from "../Store/AuthContext";

function Search() {
  const { input } = useShop();
  const searchData = apiData.filter((product) => {
    return product.brand.toLowerCase().includes(input.trim().toLowerCase());
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
            />
          );
        })}
      </div>
    </Wrapper>
  );
}

export default Search;
