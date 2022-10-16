import React from "react";
import "./navigation.css";
import Filter1 from "../Components/Card/Filter/Filter1";
import Filter2 from "../Components/Card/Filter/Filter2";
import ProductCard from "../Components/Product/ProductCard";
import HeaderCard from "../Components/Header/Header1/HeaderCard";
import { apiData, newApiData } from "../Store/ApiData";
import ProductCard2 from "../Components/Product/ProductCard2";
import { useShop } from "../Store/AuthContext";

function MainHome() {
  const { input } = useShop();
  const searchData = newApiData.filter((product) => {
    return product.brand.toLowerCase().includes(input.trim().toLowerCase());
  });
  return (
    <React.Fragment>
      <HeaderCard />
      <Filter1 />
      <Filter2 trending="New Arrivals" />
      <div className="sneaker-trending__container">
        <div className="scroller">
          {searchData
            .slice(Math.random() * 20, Math.random() * 100)
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
        {searchData.map((product) => {
          return (
            <ProductCard
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
    </React.Fragment>
  );
}

export default MainHome;
