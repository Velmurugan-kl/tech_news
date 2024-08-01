import React from 'react';
import './ReviewedContentCard.css'; // Link to your CSS file

const reviews = [
  {
    user: "John Doe",
    rating: 4,
    comment: "Great product! The performance is top-notch, and the design is sleek.",
    date: "2024-07-20"
  },
  {
    user: "Jane Smith",
    rating: 5,
    comment: "Absolutely love it! The battery life is incredible and it's very portable.",
    date: "2024-07-25"
  },
];

function ReviewedContentCard() {
  return (
    <div className="reviewed-content-wrapper">
      <h2>User Reviews</h2>
      <div className="review-cards">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="review-card-header">
              <div className="review-user">{review.user}</div>
              <div className="review-rating">{`${review.rating} ★`}</div>
            </div>
            <div className="review-card-body">
              <p className="review-comment">{review.comment}</p>
            </div>
            <div className="review-card-footer">
              <span className="review-date">{review.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewedContentCard;
