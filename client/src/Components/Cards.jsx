import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Cards.css";

const Cards = ({ NewsData, handleCardClick }) => {
  const cardSliderSettings = {
    dots: true,
    infinite: true,
    arrows:false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...cardSliderSettings} className="container">
      {NewsData.map((card) => (
        <div key={card.id} className="slider-card-wrapper">
          <div className="card" onClick={() => handleCardClick(card.id)}>
            {card.image && <img src={card.image} alt={card.title} className="card-image" />}
            <h2 className="card-title">{card.title}</h2>
            <p className="card-content">{card.content}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Cards;
