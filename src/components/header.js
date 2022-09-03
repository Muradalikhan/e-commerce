import React from "react";
import "./style/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { showCart } from "../config/redux/showCart";

function Header() {
  const dispatch = useDispatch();
  const showCartstate = useSelector((state) => state.showCart.value);
  const cartCounter = useSelector((state) => state.showCart.counter);

  const cartShow = () => {
    dispatch(showCart(!showCartstate));
  };

  return (
    <div className="header">
      <div>
        <b>OnlineShop</b>
      </div>
      <div>
        {cartCounter > 0 && <span className="cart-counter">{cartCounter}</span>}
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
