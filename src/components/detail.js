import React from "react";
import { useLocation } from "react-router-dom";
import Button from "./Button.js";
import "./style/detail.css";

const Detail = () => {
  const location = useLocation();
  const { title, description, price, image, category } = location?.state;

  return (
    <div>
      <h1 className="p-2 bg-info">{category}</h1>
      <div className="container">
        <div className="card-detail float-left">
          <div className="row ">
            <div className="col-sm-7">
              <div className="card-block">
                <h4 className="title-detail ">{title}</h4>
                <p>{description}</p>
                <p className="price-tag">{price}</p>
                <Button
                  title="Add to Cart"
                  style={{
                    width: "100%",
                    backgroundColor: "tomato",
                    padding: "10px",
                  }}
                />
              </div>
            </div>

            <div className="col-sm-5">
              <img
                className="d-block w-100 image-detail"
                src={image}
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
