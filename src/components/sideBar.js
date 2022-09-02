import React from "react";
import { useState } from "react";
import "./style/sideBar.css";

const listItem = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
  "Item 7",
  "Item 8",
  "Item 9",
];

const SideBar = () => {
  const [list, setList] = useState(listItem);
  const [index, setIndex] = useState(0);

  return (
    <div className="List">
      {list.map((item, ind) => (
        <div
          key={ind}
          className={index === ind ? "ListItem active" : "ListItem"}
          onClick={() => {
            setIndex(ind);
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
