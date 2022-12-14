import React from "react";
import { Link, useParams } from "react-router-dom";
import "./navigation.css";
import HeaderCard2 from "../Components/Header/Header2/HeaderCard2";
import ImageCard from "../Components/Card/ImageCard/ImageCard";
import ProductDetails from "../Components/Product/ProductDetails/ProductDetails";
import Wrapper from "../Components/UI/Wrapper/Wrapper";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { apiData } from "../Store/ApiData";
import { useShop } from "../Store/AuthContext";
function SProduct() {
  const { state } = useShop();
  const { id } = useParams();
  const product = apiData.filter((product) => {
    return product.id === id;
  });
  const counter = state.cart.reduce((a, b) => {
    return a + b.count;
  }, 0);
  return (
    <React.Fragment>
      <Wrapper>
        <HeaderCard2
          header="Air Jordan 1"
          content={
            product[0].brand === "Nike" ? (
              <img
                src="https://pngimg.com/uploads/nike/nike_PNG11.png"
                alt=""
              />
            ) : product[0].brand === "Jordan" ? (
              <img
                src="https://thekickzstand.com.au/wordpress/wp-content/uploads/2020/12/1200px-Jumpman_logo.svg_.png"
                alt=""
              />
            ) : product[0].brand === "New Balance" ? (
              <img
                src="https://e7.pngegg.com/pngimages/894/953/png-clipart-new-balance-brand-shoe-logo-sneakers-business-text-retail.png"
                alt=""
              />
            ) : product[0].brand === "Converse" ? (
              <img
                src="https://e7.pngegg.com/pngimages/490/1008/png-clipart-t-shirt-chuck-taylor-all-stars-converse-crew-neck-logo-t-shirt-emblem-fashion-thumbnail.png"
                alt=""
              />
            ) : product[0].brand === "adidas" ? (
              <img
                src="https://toppng.com/uploads/preview/adidas-logo-png-adidas-11563653245c6zmdnvsld.png"
                alt=""
              />
            ) : (
              <img
                src="https://pngimg.com/uploads/nike/nike_PNG11.png"
                alt=""
              />
            )
          }
          icon=<Link to="/cart">
            <ShoppingCartIcon />
          </Link>
          count={counter}
        />
      </Wrapper>
      <ImageCard image={product[0].image.small} />
      {product.map((product) => {
        return (
          <ProductDetails
            key={product.id}
            id={product.id}
            gender={product.gender}
            names={product.name}
            price={product.estimatedMarketValue}
            sku={product.sku}
            releaseDate={product.releaseDate}
            story={product.story}
            stockX={product.links.stockX}
            goat={product.links.goat}
            flightClub={product.links.flightClub}
            currItem={product}
          />
        );
      })}
    </React.Fragment>
  );
}

export default SProduct;
