import React from "react";
import Slider from "react-slick";
import "./HeadlineCard.css";

const CardSlider = ({ slidesData, handleCardClick }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Slider {...settings}>
      {slidesData.map((slide) => (
        <div
          key={slide.id}
          className="headline-card-container"
          onClick={() => openLink(slide.page)}
        >
          <div className="headline-card-img">
            <img src={slide.img} alt="Article" />
          </div>
          <div className="headline-card-content">
            <h3 className="headline-card-title">{slide.title}</h3>
            <p className="headline-card-description">{slide.description}</p>
            <div className="headline-card-meta">
              <span>{slide.author}</span> | <span>{slide.date}</span>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default CardSlider;
