// src/components/HomeContent.js
import React, { useState, useRef, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeContent.css";
import CardSlider from "./HeadlineCard";
import News from "./News";
import Cards from "./Cards";
import {
  fetchNewsData,
  fetchReviewData,
  fetchGadgetDataById,
} from "../Api/ApiLoad";
import { transformNewsData } from "../Api/ApiLoad";
import Footer from "./Footer";

const HomeContent = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [newsData, setNewsData] = useState(null);
  const newContentRef = useRef(null);
  const [slidesData, setSlidesData] = useState([]);
  const [headLineData, setHeadLineData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const apiData = await fetchNewsData();
      const RevApiData = await fetchReviewData();
      const transformedData = transformNewsData(apiData);
      setHeadLineData(transformedData);
      // console.log(transformNewsData);
      setSlidesData(RevApiData);
    };

    getData();
  }, []);

  // const cardsData = [
  //   {
  //     id: 1,
  //     title: "Card 1",
  //     content: "This is card 1.",
  //     image: "https://via.placeholder.com/300",
  //   },
  //   {
  //     id: 2,
  //     title: "Card 2",
  //     content: "This is card 2.",
  //     image: "https://via.placeholder.com/300",
  //   },
  //   // Add more cards as needed...
  // ];

  const handleCardClick = async (cardId) => {
    console.log(cardId);
    setSelectedCard(cardId);
    const fetchedData = await fetchGadgetDataById(cardId);
    setNewsData(fetchedData);
  };

  useEffect(() => {
    if (selectedCard && newContentRef.current) {
      newContentRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [selectedCard]);

  return (
    <div>
      <div className="main-body">
        <div className="headline" id="home">
          <h1>Byte-Sized News</h1>
          <CardSlider
            slidesData={headLineData}
            handleCardClick={handleCardClick}
          />
        </div>
        <div className="sub-cont" id="reviews">
          <div className="sub-cont-head">
            <h1>BYTES</h1>
          </div>
          <Cards NewsData={slidesData} handleCardClick={handleCardClick} />
        </div>
        <div className="conta">{/* <Contact /> */}</div>
        {selectedCard && newsData && (
          <div className="new-component-container" ref={newContentRef}>
            <News newsData={newsData} /> {/* Pass newsData as prop */}
          </div>
        )}
      </div>
      <div id="about">

      <Footer/>
      </div>
    </div>
  );
};

export default HomeContent;
