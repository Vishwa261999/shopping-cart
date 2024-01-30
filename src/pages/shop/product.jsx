import React, { useContext, useState } from "react";
import { Shopcontext } from "../../context/shop-context";
import { Heart } from "phosphor-react";

export const Product = (props) => {
  const { id, productName, price, productImage, productDetails } = props.data;
  const {
    addToCart,
    cartItems,
    addToWishlist,
    removeFromWishList,
    wishList,
  } = useContext(Shopcontext);

  const cartItemAmount = cartItems[id];

  const [isFavourite, setIsFavourite] = useState(wishList[id]);
  const handleToggleFavourite = () => {
    setIsFavourite(!isFavourite);
    if (!isFavourite) {
      addToWishlist(id);
    } else {
      removeFromWishList(id);
    }
  };

  return (
    <div className="producter">
      <div className="product">
        <img src={productImage} alt="" />
        <div className="description">
          <p>{productDetails}</p>
          <p>Aluminium, 7 - Piece</p>
          <p>
            <b>{productName}</b>
          </p>
        </div>
        <div className="fpraveen">
          <p>
            <button className="f-p">3.5 ⭐</button>${price}
          </p>
          <button className="addToCartBttn" onClick={() => addToCart(id)}>
            Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
          </button>
          {isFavourite ? (
            <Heart
              size={32}
              style={{ color: "red" }}
              weight="fill"
              onClick={handleToggleFavourite}
            />
          ) : (
            <Heart size={30} onClick={handleToggleFavourite} />
          )}
        </div>
      </div>
    </div>
  );
};
