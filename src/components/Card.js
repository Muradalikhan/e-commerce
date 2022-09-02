import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incCartCounter } from "../config/redux/showCart";
import { baskitItem } from "../config/redux/basket";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./style/card.css";
import Button from "./Button";

const Card = () => {
  const [arr, setArr] = useState([]);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const catogry = useSelector((state) => state.catogry.value);

  const fetchData = async () => {
    if (catogry !== "all" && catogry !== "") {
      await fetch(`https://fakestoreapi.com/products/category/${catogry}`)
        .then((res) => res.json())
        .then((json) => setProducts(json));
    } else if (catogry === "" || catogry === "all") {
      await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => setProducts(json));
    }
  };

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
  }, [products]);

  const navigate = useNavigate();
  const viewdetails = (item) => {
    navigate("/detail", { state: item });
  };

  return products.map((item, ind) => {
    return (
      <div className="card" key={ind}>
        <img
          className="img"
          src={item.image}
          alt="img"
          onClick={() => viewdetails(item)}
        />

        <div>
          <h3 className="title">
            {item.title.length > 10 ? item.title.substring(0, 10) : item.title}
          </h3>
          <p className="dis">
            {item.description.length > 60
              ? item.description.substring(0, 60) + "..."
              : item.description}
          </p>
          <div className="action">
            <span className="price">Pkr: {item.price}</span>
            <Button
              title=" Add to card"
              onClick={() => {
                addtoCart(item);
              }}
            />
          </div>
        </div>
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
      </div>
    );
  });
};

export default Card;
