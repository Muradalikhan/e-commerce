import React from "react";
import "./style/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { showCart } from "../config/redux/showCart";
import { Link } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const showCartstate = useSelector((state) => state.showCart.value);
  const productInCart = useSelector((state) => state.baskit.value);

  const cartShow = () => {
    dispatch(showCart(!showCartstate));
  };

  return (
    <div className="header">
      <div>
        <b><Link to='/'>OnlineShop</Link></b>
      </div>
      <div role="button">
        {productInCart.length > 0 && <span className="cart-counter">{productInCart.length}</span>}
        <FontAwesomeIcon
          icon={faShoppingCart}
          color="White"
          size="2x"
          onClick={cartShow}
        />
      </div>
    </div>
  );
}

export default Header;
