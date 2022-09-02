import React, { useEffect, useState } from "react";
import "./style/addCard.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteBaskitItem } from "../config/redux/basket";
import { decCartCounter } from "../config/redux/showCart";

const AddCard = () => {
  const baskitData = useSelector((state) => state.baskit.value);
  const counter = useSelector((state) => state.showCart.counter);
  const [data, setData] = useState(baskitData);
  const [total, setTotal] = useState("");
  const dispatch = useDispatch();

  const deleteItem = (id) => {
    const dataAfterDelete = data.filter((item) => item.id !== id);
    setData(dataAfterDelete);
    dispatch(deleteBaskitItem({ id: id }));
    dispatch(decCartCounter());
  };
  //this was the missed
  useEffect(() => {
    setData(baskitData);
  }, [baskitData]);
  useEffect(() => {
    setTotal(data.reduce((a, v) => (a = a + v.price), 0));
  }, [data]);

  return counter > 0 ? (
    <>
      {data.map((item, ind) => {
        return (
          <div className="card-add" key={ind}>
            <div className="quantity">
              <button className="btn btn-primary">+</button>
              <span className="p-1">0</span>
              <button className="btn btn-primary">-</button>
            </div>
            <img className="img-add" src={item.image} alt="img" />

            <div>
              <h5 className="title-add">
                {item.title.length > 8
                  ? item.title.substring(0, 8)
                  : item.title}
              </h5>
              <span className="price-add">Pkr: {item.price}</span>
              <div className="action-add">
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    deleteItem(item.id);
                  }}
                >
                  x
                </button>
              </div>
            </div>
          </div>
        );
      })}

      <br />
      <h4>Total: {total}</h4>

      <button className="btn btn-primary">Check Out</button>
    </>
  ) : (
    <div>your card is empty</div>
  );
};

export default AddCard;
