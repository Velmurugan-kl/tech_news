// Card.js
import React from "react";
import "./Cards.css";

const Card = ({ title, content, image }) => {
  return (
    <div className="card">
      {image && <img src={image} alt={title} className="card-image" />}
      <div className="card-content">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
