import React from "react";
import "./imagecard.css";

function ImageCard({ image }) {
  return (
    <div className="imagecard-img">
      {image === "" ? (
        <img
          src="https://soleretriever.s3.amazonaws.com/adidas-yeezy-desert-boot-rock-eg6462-EG6462.png"
          alt=""
        />
      ) : (
        <img src={image} alt="" />
      )}
    </div>
  );
}

export default ImageCard;
