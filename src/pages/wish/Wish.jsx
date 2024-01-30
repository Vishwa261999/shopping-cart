import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { Shopcontext } from "../../context/shop-context";
import "./Wish.css";

function Wish() {
  const { wishList } = useContext(Shopcontext);
  return (
    <div className="wishlist">
      {PRODUCTS.map((products) => {
        if (wishList[products.id] === true) {
          return (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <div>
                <img
                  src={products.productImage}
                  alt=""
                  style={{ height: "300px", width: "100%" }}
                />
                <p>
                  <b>{products.productName}</b>
                </p>
                <p>${products.price}</p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Wish;
