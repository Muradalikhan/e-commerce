import React from "react";

export default function Button({ title, onClick, ...rest}) {
  return (
    <button
      className="btn text-white"
      onClick={onClick}
      style={{ background: "tomato" }}
      {...rest}
    >
      {title}
    </button>
  );
}
