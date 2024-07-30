import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeContent.css";
import catsImage from "../assets/cats.jpg";
import otherImage from "../assets/other.jpg";
import Card from "./Cards";
import CardSlider from "./HeadlineCard";

const HomeContent = () => {
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slidesData = [
    {
      id: 1, // Add an ID for routing
      title: "Card Title 1",
      description:
        "This is a brief description of the news article. It gives a summary of the content.",
      img: catsImage,
      author: "Author Name 1",
      date: "July 30, 2024",
    },
    {
      id: 2, // Add an ID for routing
      title: "Card Title 2",
      description:
        "This is another brief description of the news article. It gives a summary of the content.",
      img: otherImage,
      author: "Author Name 2",
      date: "August 1, 2024",
    },
  ];

  const cardsData = [
    {
      title: "Card 1",
      content: "This is card 1.",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "Card 2",
      content: "This is card 2.",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "Card 3",
      content: "This is card 3.",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "Card 3",
      content: "This is card 3.",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "Card 3",
      content: "This is card 3.",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "Card 3",
      content: "This is card 3.",
      image: "https://via.placeholder.com/300",
    },
  ];

  const handleCardClick = (slideId) => {
    console.log(`Card with ID ${slideId} clicked`);
  };

  return (
    <div className="main-body">
      <div className="headline">
        <h1>Byte-Sized News</h1>
        <CardSlider
          slidesData={slidesData}
          settings={setting}
          handleCardClick={handleCardClick}
        />
      </div>
      <div className="sub-cont">
        <div className="container">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              content={card.content}
              image={card.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
