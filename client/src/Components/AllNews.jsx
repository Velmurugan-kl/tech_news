import React, { useState, useRef, useEffect } from "react";
import "./AllNews.css";
import SearchBar from "./SearchBar";
import News from "./News";
import { fetchGadgetDataById, fetchReviewData } from "../Api/ApiLoad";
import Article from "./Article";

const AllNewsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [newsData, setNewsData] = useState(null);
  const newsContentRef = useRef(null);

  // Shuffle function
  const shuffleArray = (array) => {
    let shuffledArray = array.slice(); // Create a copy of the array
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements
    }
    return shuffledArray;
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const RevApiData = await fetchReviewData();
        const shuffledCards = shuffleArray(RevApiData); // Shuffle the data
        setCards(shuffledCards); // Set the shuffled data to the cards state
      } catch (error) {
        console.error("Error fetching review data:", error);
      }
    };

    getData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCardClick = async (cardId) => {
    setSelectedCard(cardId);
    try {
      const fetchedData = await fetchGadgetDataById(cardId);
      setNewsData(fetchedData);
    } catch (error) {
      console.error("Error fetching gadget data:", error);
    }
  };

  useEffect(() => {
    if (selectedCard && newsContentRef.current) {
      newsContentRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [selectedCard]);

  return (
    <div className="allnews-all-cards-page">
      <SearchBar value={searchTerm} onChange={handleSearchChange} onSubmit={handleSearchSubmit} />
      <h1>All News</h1>
      <div className="allnews-cards-grid">
        {filteredCards.map((card) => (
          <div
            key={card.id}
            className={`allnews-card ${selectedCard === card.id ? 'selected-card' : ''}`}
            onClick={() => handleCardClick(card.id)}
          >
            {card.image && <img src={card.image} alt={card.title} className="allnews-card-image" />}
            <div className="allnews-card-content">
              <h2 className="allnews-card-title">{card.title}</h2>
              <p className="allnews-card-description">{card.heroDescription}</p>
            </div>
          </div>
        ))}
        {selectedCard && newsData && (
          <div className="allnews-news-component-container" ref={newsContentRef}>
            <Article/>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllNewsPage;
