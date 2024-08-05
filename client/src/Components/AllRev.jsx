import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./AllRev.css";
import SearchBar from "./SearchBar"; // Import the search bar component

const AllCardsPage = () => {
  const location = useLocation();
  const { state } = location;
  const { cards } = state || { cards: [] }; // Use the state to pass data

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  

  return (
    <div className="all-cards-page">
      <SearchBar value={searchTerm} onChange={handleSearchChange} onSubmit={handleSearchSubmit} />
      <h1>All Cards</h1>
      <div className="cards-grid">
        {filteredCards.map((card) => (
          <div key={card.id} className="card">
            {card.image && <img src={card.image} alt={card.title} className="card-image" />}
            <div className="card-content">
              <h2 className="card-title">{card.title}</h2>
              <p className="card-description">{card.heroDescription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCardsPage;
