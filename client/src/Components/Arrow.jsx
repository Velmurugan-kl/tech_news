import React from "react";
import "./Arrow.css";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-arrow-next`}
      style={{ ...style }}
      onClick={onClick}
    ></div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-arrow-prev`}
      style={{ ...style }}
      onClick={onClick}
    ></div>
  );
};

export { NextArrow, PrevArrow };
