import React from "react";
import Header from "../components/header";
import Header2 from "../components/header2";
import Cart from "../components/Cart";
import { useSelector } from "react-redux";
const MainLayout = ({ children }) => {
  const showCartstate = useSelector((state) => state.showCart.value);

  return (
    <>
      <Header />
      <Header2 />
      {showCartstate && <Cart />}
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
