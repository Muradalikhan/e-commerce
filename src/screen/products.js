import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToBaskit } from "../config/redux/basket";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Loader from "../components/loader";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const catogry = useSelector((state) => state.catogry.value);
  const productInCart = useSelector((state) => state.baskit.value);

  const fetchData = useCallback(async () => {
    if (catogry !== "all" && catogry !== "") {
      setLoading(true);
      await fetch(`https://fakestoreapi.com/products/category/${catogry}`)
        .then((res) => res.json())
        .then((json) => {
          setLoading(false);
          setProducts(json);
        });
    } else if (catogry === "" || catogry === "all") {
      setLoading(true);
      await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => {
          setLoading(false);
          setProducts(json);
        });
    }
  }, [catogry]);

  const addtoCart = (item) => {
    dispatch(addToBaskit({...item,quantity:1}));
    toast.success(`Your item has added to the cart`);
  };

  useEffect(() => {
    if (productInCart) {
      console.log("productInCart", productInCart);
    }
  }, [productInCart]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const navigate = useNavigate();
  const viewdetails = (item) => {
    navigate("/detail", { state: item });
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : products.length > 0 ? (
        products.map((item, ind) => (
          <Card
            key={ind}
            item={item}
            onClick={() => viewdetails(item)}
            addtoCart={() => addtoCart(item)}
          />
        ))
      ) : (
        <p className="p-5">No data found</p>
      )}
      ;
      <ToastContainer position="top-center" autoClose={1000} />
    </>
  );
};
export default Products;
