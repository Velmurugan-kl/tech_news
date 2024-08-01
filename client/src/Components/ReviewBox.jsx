import { useState } from "react";
import "./ReviewBox.css";
import { FaStar } from "react-icons/fa";
import ReviewedContentCard from "./ReviewedContentCard";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function ReviewBox() {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [comment, setComment] = useState(""); // State for textarea input

  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    // Process the data
    console.log("Rating:", currentValue);
    console.log("Comment:", comment);

    // Optionally, reset the form
    setCurrentValue(0);
    setComment("");
  };

  return (
    <div className="review-box-wrapper">
      <div className="review-box">
        <div className="review-box-content">
          <h2>React Ratings</h2>
          <div className="star-rating-container">
            {stars.map((_, index) => {
              return (
                <FaStar
                  key={index}
                  size={24}
                  onClick={() => handleClick(index + 1)}
                  onMouseOver={() => handleMouseOver(index + 1)}
                  onMouseLeave={handleMouseLeave}
                  color={
                    (hoverValue || currentValue) > index
                      ? colors.orange
                      : colors.grey
                  }
                  className="star-icon"
                />
              );
            })}
          </div>
          <textarea
            placeholder="What's your experience?"
            value={comment} // Bind the value to the state
            onChange={handleCommentChange} // Handle change events
            className="comment-textarea"
          />
          <button
            onClick={handleSubmit} // Handle button click
            className="submit-button"
          >
            Submit
          </button>
        </div>
        <div className="reviewed-content">
          <ReviewedContentCard/>
        </div>
      </div>
    </div>
  );
}

export default ReviewBox;
