import React from "react";
import { PRODUCTS } from "../../products";
import { Shopcontext } from "../../context/shop-context";
import { useContext } from "react";
import { CartItem } from "./cart-item";
import "./cart.css";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(Shopcontext);

  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <>
      <div className="cart-banner">
        <div className="cart-banner-content">
          <h1>Your Shopping Cart</h1>
          <p>Review and update your items</p>
        </div>
      </div>
      <div className="cart">
        <div>
          <h1>YOUR CART ITEMS</h1>
        </div>

        <div className="cartItems">
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />;
            }
          })}
        </div>

        {totalAmount > 0 ? (
          <div className="checkout">
            <p>Subtotal: ${totalAmount}</p>
            <button onClick={() => navigate("/")}>Continue Shopping</button>
            <a href="/">
              <button>Checkout</button>
            </a>
          </div>
        ) : (
          <h1>Your Cart is Empty</h1>
        )}
      </div>
    </>
  );
};
