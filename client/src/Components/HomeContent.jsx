// src/components/HomeContent.js
import React, { useState, useRef, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeContent.css";
import CardSlider from "./HeadlineCard";
import { Contact } from "./Contact";
import Footer from "./Footer";
import News from "./News";
import Cards from "./Cards";
import { fetchNewsData } from "../Api/ApiLoad";
import { transformNewsData } from "../Api/ApiTransformation";

const HomeContent = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [slidesData, setSlidesData] = useState([]);
  const newContentRef = useRef(null);

  useEffect(() => {
    const getData = async () => {
      const apiData = await fetchNewsData();
      const transformedData = transformNewsData(apiData);
      console.log(transformNewsData);
      setSlidesData(transformedData);
    };

    getData();
  }, []);

  const cardsData = [
    {
      id: 1,
      title: "Card 1",
      content: "This is card 1.",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      title: "Card 2",
      content: "This is card 2.",
      image: "https://via.placeholder.com/300",
    },
    // Add more cards as needed...
  ];

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);
  };

  useEffect(() => {
    if (selectedCard && newContentRef.current) {
      newContentRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [selectedCard]);

  return (
    <div className="main-body">
      <div className="headline" id="home">
        <h1>Byte-Sized News</h1>
        <CardSlider slidesData={slidesData} handleCardClick={handleCardClick} />
      </div>
      <div className="sub-cont" id="news">
        <div className="sub-cont-head">
          <h1>BYTES</h1>
        </div>
        <Cards NewsData={cardsData} handleCardClick={handleCardClick} />
      </div>
      <div className="conta">{/* <Contact /> */}</div>
      {selectedCard && (
        <div className="new-component-container" ref={newContentRef}>
          <News cardId={selectedCard} />
        </div>
      )}
    </div>
  );
};

export default HomeContent;
