import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Cards.css"; 
import { NextArrow, PrevArrow } from "./Arrow";

const Cards = ({ NewsData, handleCardClick }) => {
  const cardSliderSettings = {
    dots: true,
    infinite: true,
    arrows: true, 
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
    <Slider {...cardSliderSettings} className="cards-container">
      {NewsData.map((card) => (
        <div key={card.id} className="cards-slider-card-wrapper">
          <div className="news-card" onClick={() => handleCardClick(card.id)}>
            {card.image && <img src={card.image} alt={card.title} className="news-card-image" />}
            <div className="news-card-content">
              <h2 className="news-card-heading">{card.title}</h2>
              <p className="news-card-subheading">{card.heroDescription}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="cards-slider-card-wrapper">
        <div className="more-button-wrapper">
          <div className="more-button">
            More
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Cards;
