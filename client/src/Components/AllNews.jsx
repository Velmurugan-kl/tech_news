import React, { useState, useRef, useEffect } from "react";
import "./AllNews.css";
import SearchBar from "./SearchBar";
import { fetchArticleData, fetchArticleDataById } from "../Api/ApiLoad";
import Article from "./Article";

const AllNewsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const newsContentRef = useRef(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const RevApiData = await fetchArticleData();
        setCards(RevApiData); // Set the shuffled data to the cards state
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching review data:", error);
        setLoading(false); // Ensure loading is set to false even if an error occurs
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
    card?.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCardClick = async (cardId) => {
    setSelectedCard(cardId);
    try {
      const fetchedData = await fetchArticleDataById(cardId);
      setNewsData(fetchedData);
    } catch (error) {
      console.error("Error fetching article data:", error);
    }
  };

  useEffect(() => {
    if (selectedCard && newsContentRef.current) {
      newsContentRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [selectedCard]);

  // Find the selected card data from the cards array
  const selectedArticleData = cards.find((card) => card.id === selectedCard);

  return (
    <div className="allnews-all-cards-page">
      {/* Show the loading overlay if loading is true */}
      {loading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
          <span>Loading...</span>
        </div>
      )}
      
      <SearchBar
        value={searchTerm}
        onChange={handleSearchChange}
        onSubmit={handleSearchSubmit}
      />
      <h1>All News</h1>
      <div className="allnews-cards-grid">
        {filteredCards.map((card) => (
          <div
            key={card.id}
            className={`allnews-card ${
              selectedCard === card.id ? "selected-card" : ""
            }`}
            onClick={() => handleCardClick(card.id)}
          >
            {card.image && (
              <img
                src={card.image}
                alt={card.title}
                className="allnews-card-image"
              />
            )}
            <div className="allnews-card-content">
              <h2 className="allnews-card-title">{card.title}</h2>
              <div className="allnews-card-description-container">
                {card.tags && (
                  <div className="allnews-tags-wrapper">
                    <h4 className="allnews-tags-title">Tags:</h4>
                    <ul className="allnews-tags-list">
                      {card.tags.map((tag, index) => (
                        <li key={index} className="allnews-tag-item">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Display the article in a separate container when a card is selected */}
      {selectedCard && selectedArticleData && (
        <div className="allnews-news-component-container" ref={newsContentRef}>
          <Article articleData={selectedArticleData} />
        </div>
      )}
    </div>
  );
};

export default AllNewsPage;
