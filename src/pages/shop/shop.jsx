import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <div className="banner">
          <div className="banner-content">
            <h1>Where Shopping Feels Like a Breeze</h1>
            <p>Discover Amazing Products</p>
            
          </div>
        </div>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
