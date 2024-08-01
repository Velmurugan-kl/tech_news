// NewComponent.js
import React from "react";

const NewComponent = ({ cardId }) => {
  return (
    <div className="new-component">
      <h2>Details for Card ID: {cardId}</h2>
      <p>Here are the details for the selected card.</p>
      {/* Add any other content or logic you want for this component */}
    </div>
  );
};

export default NewComponent;
