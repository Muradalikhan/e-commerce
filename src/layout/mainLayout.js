import React from "react";
import Header from "../components/header";
import Header2 from "../components/header2";
import SideBar from "../components/sideBar";
import Cart from "../components/Cart";
import { useSelector } from "react-redux";
const MainLayout = ({ children }) => {
  const showCartstate = useSelector((state) => state.showCart.value);

  return (
    <>
      <Header />
      <Header2 />
      {showCartstate && <Cart />}
      <SideBar />
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
