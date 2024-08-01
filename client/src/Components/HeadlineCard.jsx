// CardSlider.js
import React from "react";
import Slider from "react-slick"; // Assuming you are using react-slick
import "./HeadlineCard.css"; // Import CSS for the card slider styles

const CardSlider = ({ slidesData, handleCardClick }) => {
  const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    speed: 500,
    // fade:true,
    centerMode:true,
    // focusOnSelect:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const openLink = (url) => {
    window.open(url,"_blank");
  };

  return (
    <Slider {...settings}>
      {slidesData.map((slide) => (
        <div
          key={slide.id}
          className="card-container"
          onClick={() => openLink(slide.page)}
        >
          <div className="card-img">
            <img src={slide.img} alt="Article" />
          </div>
          <div className="card-content">
            <h3 className="card-title">{slide.title}</h3>
            <p className="card-description">{slide.description}</p>
            <div className="card-meta">
              <span>{slide.author}</span> | <span>{slide.date}</span>
            </div>
          </div>
        </div>
      ))}
    </Slider>
    
  );
};

export default CardSlider;
