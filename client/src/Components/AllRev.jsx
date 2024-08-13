import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./AllRev.css";
import SearchBar from "./SearchBar";
import Review from "./ReviewContent.jsx";
import { fetchGadgetDataById, fetchReviewData } from "../Api/ApiLoad";

const AllCardsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [newsData, setNewsData] = useState(null);
  const newsContentRef = useRef(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const RevApiData = await fetchReviewData();
        setCards(RevApiData); // Set the fetched data to the cards state
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
    <div className="all-cards-page">
      <SearchBar value={searchTerm} onChange={handleSearchChange} onSubmit={handleSearchSubmit} />
      <h1>All Reviews</h1>
      <div className="cards-grid">
        {filteredCards.map((card) => (
          <div
            key={card.id}
            className={`card ${selectedCard === card.id ? 'selected-card' : ''}`}
            onClick={() => handleCardClick(card.id)}
          >
            {card.image && <img src={card.image} alt={card.title} className="card-image" />}
            <div className="card-content">
              <h2 className="card-title">{card.title}</h2>
              <p className="card-description">{card.heroDescription}</p>
            </div>
          </div>
        ))}
        {selectedCard && newsData && (
          <div className="news-component-container" ref={newsContentRef}>
            <Review newsData={newsData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AllCardsPage;
