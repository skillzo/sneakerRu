import React from "react";
import "./navigation.css";
import HeaderCard2 from "../Components/Header/Header2/HeaderCard2";
import ImageCard from "../Components/Card/ImageCard/ImageCard";
import ProductDetails from "../Components/Product/ProductDetails/ProductDetails";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function SProduct() {
  return (
    <>
      <HeaderCard2
        header="Air Jordan 1"
        content=<img
          src="https://pngimg.com/uploads/nike/nike_PNG11.png"
          alt=""
        />
        icon=<MoreHorizIcon />
      />
      <ImageCard />
      <ProductDetails />
    </>
  );
}

export default SProduct;
