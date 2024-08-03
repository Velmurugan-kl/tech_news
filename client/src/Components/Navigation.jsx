import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div class="nav">
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#news">News</a>
        </li>
        <li>
          <a href="#reviews">Reviews</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
