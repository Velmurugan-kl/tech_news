import React, { useState } from 'react';
import axios from 'axios';

function UpdateReviewForm({ reviewId, onUpdate }) {
  const [review, setReview] = useState({
    user: '',
    rating: 1,
    comment: '',
    date: new Date().toISOString().split('T')[0], // Default to today’s date
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview((prevReview) => ({
      ...prevReview,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3001/reviews/${reviewId}`, review);
      onUpdate(response.data); // Pass updated review data to parent
    } catch (error) {
      console.error('Error updating review:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update Review</h2>
      <label>
        User:
        <input type="text" name="user" value={review.user} onChange={handleChange} />
      </label>
      <label>
        Rating:
        <input type="number" name="rating" min="1" max="5" value={review.rating} onChange={handleChange} />
      </label>
      <label>
        Comment:
        <textarea name="comment" value={review.comment} onChange={handleChange}></textarea>
      </label>
      <label>
        Date:
        <input type="date" name="date" value={review.date} onChange={handleChange} />
      </label>
      <button type="submit">Update Review</button>
    </form>
  );
}

export default UpdateReviewForm;
