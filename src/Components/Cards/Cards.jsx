import React from "react";
import "./Cards.css";

/**
 * @author
 * @function Card
 **/

const Cards = (props) => {
  return (
    <>
      <div
        className="card"
        style={{ width: props.width ? props.width : "100%" }}
        {...props}
      >
        {props.children}
      </div>
    </>
  );
};

export default Cards;
