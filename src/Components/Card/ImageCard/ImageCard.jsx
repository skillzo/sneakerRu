import { height } from "@mui/system";
import "./imagecard.css";
import React from "react";

function ImageCard(width, height) {
  return (
    <div className="imagecard-img">
      <img
        src="https://www.pricerunner.com/product/1200x630/3004239578/Nike-Air-Jordan-1-Retro-Low-OG-SP-x-Travis-Scott-Sail-Black-Dark-Mocha.jpg"
        alt=""
      />
    </div>
  );
}

export default ImageCard;
