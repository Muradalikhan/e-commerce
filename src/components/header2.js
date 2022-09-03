import React from "react";
import "./style/header2.css";
import { useDispatch } from "react-redux";
import { catogry } from "../config/redux/catogries";
import { useNavigate } from "react-router-dom";

function Header2() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const catogries = [
    "all",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  const navigateTabs = (item) => {
    navigate("/");
    dispatch(catogry(item));
  };

  return (
    <div className="header2">
      {catogries.map((item, ind) => {
        return (
          <div
            key={ind}
            className="mx-2 custom"
            onClick={() => navigateTabs(item)}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}

export default Header2;
