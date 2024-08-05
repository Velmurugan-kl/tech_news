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
import SearchBar from "./SearchBar";

const HomeContent = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [newsData, setNewsData] = useState(null);
  const newContentRef = useRef(null);
  const [slidesData, setSlidesData] = useState([]);
  const [headLineData, setHeadLineData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getData = async () => {
      const apiData = await fetchNewsData();
      const RevApiData = await fetchReviewData();
      const transformedData = transformNewsData(apiData);
      setHeadLineData(transformedData);
      setSlidesData(RevApiData);
    };

    getData();
  }, []);

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

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  return (
    <div>
      <div className="main-body" id="home">
        <SearchBar value={searchTerm} onChange={handleSearchChange} onSubmit={handleSearchSubmit} />
        
        <div className="headline">
          <h1>Tech Bits</h1>
          <CardSlider
            slidesData={headLineData}
            handleCardClick={handleCardClick}
          />
        </div>
        <div className="sub-cont" id="reviews">
          <div className="sub-cont-head">
            <h1>Tech Review</h1>
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
        <Footer />
      </div>
    </div>
  );
};

export default HomeContent;
