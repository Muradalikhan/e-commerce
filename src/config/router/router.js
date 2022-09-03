import React from "react";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "../../screen/404page";
import ProductDetail from "../../screen/productDetail";
import Products from "../../screen/products";

const RouterApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/detail" element={<ProductDetail />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default RouterApp;
