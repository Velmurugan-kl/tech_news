import React, { useState, useRef, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeContent.css";
import CardSlider from "./HeadlineCard";
import Review from "./ReviewContent";
import Cards from "./Cards";
import { fetchNewsData, fetchReviewData, fetchGadgetDataById, fetchArticleDataById, fetchArticleData } from "../Api/ApiLoad";
import { transformNewsData } from "../Api/ApiLoad";
import SearchBar from "./SearchBar";
import Article from "./Article";

const HomeContent = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectednewsCard, setSelectednewsCard] = useState(null);
  const [newsData, setNewsData] = useState(null);
  const [articleData, setArticleData] = useState(null); // Added for article data
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
      const newsApiData = await fetchArticleData();
      const transformedData = transformNewsData(apiData);
      setHeadLineData(transformedData);
      setSlidesData(RevApiData);
      setShuffledSlidesData(newsApiData); 
      console.log(shuffledSlidesData,"--------rev");
    };

    getData();
  }, []);


  const handleCardClick = async (cardId) => {
    setSelectedCard(cardId);
    setSelectednewsCard(null); // Close the Article component
    const fetchedData = await fetchGadgetDataById(cardId);
    setNewsData(fetchedData);
  };

  const handlenewsCardClick = async (cardId) => {
    setSelectednewsCard(cardId);
    setSelectedCard(null); // Close the Review component
    const fetchedData = await fetchArticleDataById(cardId); 
    setArticleData(fetchedData); // Set article data
    console.log(articleData,"---------news");
  };

  useEffect(() => {
    if (selectedCard && newContentRef.current) {
      newContentRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [selectedCard]);

  useEffect(() => {
    if (selectednewsCard && newContentRef.current) {
      newContentRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [selectednewsCard]);

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
            <Review newsData={newsData} /> 
          </div>
        )}
        <div className={`sub-cont ${cardsVisible ? "fade-in" : ""}`} id="news" ref={cardsRef}>
          <div className="sub-cont-head">
            <h1>Tech News</h1>
          </div>
          <Cards NewsData={shuffledSlidesData} handleCardClick={handlenewsCardClick} />
        </div>
        {selectednewsCard && articleData && (
          <div className="new-component-container" ref={newContentRef}>
            <Article articleData={articleData} /> 
          </div>
        )}
      </div>

    </div>
  );
};

export default HomeContent;
