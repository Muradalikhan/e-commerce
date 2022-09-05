import React from "react";
import Button from "./Button";
import "./style/card.css";

const Card = ({ item,onClick, addtoCart }) => {
  return (
    <div className="card" role="button" >
      <img className="img" src={item.image} alt="img" onClick={onClick}/>
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
    </div>
  );
};

export default Card;
