import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incCartCounter } from "../config/redux/showCart";
import { baskitItem } from "../config/redux/basket";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Loader from "../components/loader";

const Products = () => {
  const [arr, setArr] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const catogry = useSelector((state) => state.catogry.value);

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
    toast.success(`Your item has added to the cart`);
    setArr([...arr, item]);
    dispatch(incCartCounter());
  };

  useEffect(() => {
    console.log(arr);
    if (arr) {
      dispatch(baskitItem(arr));
    }
  }, [arr]);

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
            addtoCart={addtoCart}
          />
        ))
      ) : (
        <p>No data found</p>
      )}
      ;
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};
export default Products;
