import React, { useState } from 'react';
import axios from 'axios'; // Install axios if not already: npm install axios
import './NewsForm.css'; // Link to your updated CSS file

const NewsForm = () => {
  const [heading, setHeading] = useState('');
  const [subheading, setSubheading] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('heading', heading);
    formData.append('subheading', subheading);
    formData.append('body', body);
    if (image) {
      formData.append('image', image);
    }

    try {
      await axios.post('https://your-api-endpoint.com/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('News submitted successfully!');
    } catch (error) {
      console.error('Error uploading news:', error);
      alert('Failed to submit news.');
    }
  };

  return (
    <div className="news-form-container">
      <h2>Submit News</h2>
      <form onSubmit={handleSubmit}>
        <div className="news-form-group">
          <label htmlFor="heading">News Heading:</label>
          <input
            type="text"
            id="heading"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            required
          />
        </div>
        <div className="news-form-group">
          <label htmlFor="subheading">Subheading:</label>
          <input
            type="text"
            id="subheading"
            value={subheading}
            onChange={(e) => setSubheading(e.target.value)}
            required
          />
        </div>
        <div className="news-form-group">
          <label htmlFor="body">Body:</label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows="5"
            required
          />
        </div>
        <div className="news-form-group">
          <label htmlFor="image">Image Upload:</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit" className="news-form-submit-button">Submit</button>
      </form>
    </div>
  );
};

export default NewsForm;
