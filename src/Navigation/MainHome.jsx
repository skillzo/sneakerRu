import React from "react";
import "./navigation.css";
import Filter1 from "../Components/Card/Filter/Filter1";
import Filter2 from "../Components/Card/Filter/Filter2";
import ProductCard from "../Components/Product/ProductCard";
import HeaderCard from "../Components/Header/Header1/HeaderCard";

function MainHome() {
  return (
    <>
      <HeaderCard />
      <Filter1 />
      <Filter2 />
      <div className="sneaker-container">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  );
}

export default MainHome;
