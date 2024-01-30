import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart } from "phosphor-react";
import "./navbar.css";
import { Shopcontext } from "../context/shop-context";

function Navbar() {
  const { totalCartItem } = useContext(Shopcontext);
  const totalCart = totalCartItem();

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">FLIP-ZONE</Link>
        </div>
        <div className="links">
          <div className="navbar-icons">
            <div className="wishlist">
              <Link to="/wishlist">
                <Heart size={35} style={{ color: "white" }} />           
              </Link>
            </div>
            <div className="cart-icon">
              <Link to="/cart" className="cart-link">
                <ShoppingCart size={32} />
                <span className="cart-count">{totalCart}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
