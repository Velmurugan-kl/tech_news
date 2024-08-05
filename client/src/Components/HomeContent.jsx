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
import Article from "./Article";

const HomeContent = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectednewsCard, setSelectednewsCard] = useState(null);
  const [newsData, setNewsData] = useState(null);
  const newContentRef = useRef(null);
  const [slidesData, setSlidesData] = useState([]);
  const [headLineData, setHeadLineData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const sliderRef = useRef(null);
  const cardsRef = useRef(null);
  const [sliderVisible, setSliderVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);

  const [shuffledSlidesData, setShuffledSlidesData] = useState([]);

useEffect(() => {
  const getData = async () => {
    const apiData = await fetchNewsData();
    const RevApiData = await fetchReviewData();
    const transformedData = transformNewsData(apiData);
    setHeadLineData(transformedData);
    setSlidesData(RevApiData);
    setShuffledSlidesData(shuffleArray(RevApiData)); // Shuffle the data and set it to a new state
  };

  getData();
}, []);


  const shuffleArray = (array) => {
    let shuffledArray = array.slice(); // Create a copy of the array
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements
    }
    return shuffledArray;
  };
  

  const handleCardClick = async (cardId) => {
    console.log(cardId);
    setSelectedCard(cardId);
    const fetchedData = await fetchGadgetDataById(cardId);
    setNewsData(fetchedData);
  };
  const handlenewsCardClick = async (cardId) => {
    console.log(cardId);
    setSelectednewsCard(cardId);
    // const fetchedData = await fetchGadgetDataById(cardId);
    // setNewsData(fetchedData);
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

  useEffect(() => {
    const handleScroll = () => {
      const sliderTop = sliderRef.current?.getBoundingClientRect().top;
      const cardsTop = cardsRef.current?.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sliderTop <= windowHeight) {
        setSliderVisible(true);
      }

      if (cardsTop <= windowHeight) {
        setCardsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="main-body" id="home">
        <SearchBar value={searchTerm} onChange={handleSearchChange} onSubmit={handleSearchSubmit} />
        
        <div className={`headline ${sliderVisible ? "fade-in" : ""}`} ref={sliderRef}>
          <h1>Tech Bits</h1>
          <CardSlider
            slidesData={headLineData}
            handleCardClick={handleCardClick}
          />
        </div>
        <div className={`sub-cont ${cardsVisible ? "fade-in" : ""}`} id="reviews" ref={cardsRef}>
          <div className="sub-cont-head">
            <h1>Tech Review</h1>
          </div>
          <Cards NewsData={slidesData} handleCardClick={handleCardClick} />
        </div>
        {selectedCard && newsData && (
          <div className="new-component-container" ref={newContentRef}>
            <News newsData={newsData} /> 
          </div>
        )}
        <div className={`sub-cont ${cardsVisible ? "fade-in" : ""}`} id="reviews" ref={cardsRef}>
          <div className="sub-cont-head">
            <h1>Tech NEWS</h1>
          </div>
          <Cards NewsData={shuffledSlidesData} handleCardClick={handlenewsCardClick} />
        </div>
        {selectednewsCard && (
          <div className="new-component-container" ref={newContentRef}>
            <Article /> 
          </div>
        )}
      </div>
      
    </div>
  );
  
};

export default HomeContent;
