import React, { createContext, useState } from "react";
import { PRODUCTS } from "../products";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Shopcontext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const getDefaultWishList = () => {
  let wish = {};
  for (let i = 1; i <= PRODUCTS.length; i++) {
    wish[i] = false;
  }
  console.log(wish);
  return wish;
};

getDefaultWishList();

export const ShopcontextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [wishList, setWishList] = useState(getDefaultWishList());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        console.log(cartItems[item]);
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const totalCartItem = () => {
    let totalcart = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalcart = totalcart + cartItems[item];
      }
    }
    return totalcart;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));

    toast.success("Item added to cart", {
      position: "top-right",
      autoClose: 400,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));

    toast.info("Item removed from cart", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const addToWishlist = (itemId) => {
    setWishList((prev) => ({ ...prev, [itemId]: true }));
  };

  const removeFromWishList = (itemId) => {
    setWishList((prev) => ({ ...prev, [itemId]: false }));
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    totalCartItem,
    wishList,
    addToWishlist,
    removeFromWishList,
  };
  console.log(cartItems);

  return (
    <Shopcontext.Provider value={contextValue}>
      {props.children}
    </Shopcontext.Provider>
  );
};
