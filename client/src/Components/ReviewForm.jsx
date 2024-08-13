import React, { useState } from 'react';
import axios from 'axios';
import './NewsForm.css'; // Reuse the same CSS file

const ReviewForm = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(''); // Updated to handle image links
  const [heroText, setHeroText] = useState('');
  const [heroDescription, setHeroDescription] = useState('');
  const [specifications, setSpecifications] = useState([{ category: '', detail: '' }]);
  const [pros, setPros] = useState(['']);
  const [cons, setCons] = useState(['']);
  const [performanceReview, setPerformanceReview] = useState('');
  const [designReview, setDesignReview] = useState('');
  const [conclusion, setConclusion] = useState('');

  const handleSpecificationChange = (index, event) => {
    const updatedSpecifications = [...specifications];
    updatedSpecifications[index][event.target.name] = event.target.value;
    setSpecifications(updatedSpecifications);
  };

  const addSpecificationField = () => {
    setSpecifications([...specifications, { category: '', detail: '' }]);
  };

  const handleProsChange = (index, event) => {
    const updatedPros = [...pros];
    updatedPros[index] = event.target.value;
    setPros(updatedPros);
  };

  const addProsField = () => {
    setPros([...pros, '']);
  };

  const handleConsChange = (index, event) => {
    const updatedCons = [...cons];
    updatedCons[index] = event.target.value;
    setCons(updatedCons);
  };

  const addConsField = () => {
    setCons([...cons, '']);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      title,
      image,
      heroText,
      heroDescription,
      specifications,
      pros,
      cons,
      performanceReview,
      designReview,
      conclusion,
    };

    try {
      await axios.post('http://localhost:3001/reviews', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      alert('Device submitted successfully!');
    } catch (error) {
      console.error('Error uploading device:', error);
      alert('Failed to submit device.');
    }
  };

  return (
    <div className="news-form-container">
      <h2>Submit New Device</h2>
      <form onSubmit={handleSubmit}>
        <div className="news-form-group">
          <label htmlFor="title">Device Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="news-form-group">
          <label htmlFor="image">Image URL:</label> {/* Updated to handle image links */}
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <div className="news-form-group">
          <label htmlFor="heroText">Hero Text:</label>
          <input
            type="text"
            id="heroText"
            value={heroText}
            onChange={(e) => setHeroText(e.target.value)}
            required
          />
        </div>
        <div className="news-form-group">
          <label htmlFor="heroDescription">Hero Description:</label>
          <textarea
            id="heroDescription"
            value={heroDescription}
            onChange={(e) => setHeroDescription(e.target.value)}
            rows="3"
            required
          />
        </div>
        <div className="news-form-group">
          <label>Specifications:</label>
          {specifications.map((specification, index) => (
            <div key={index} className="specification-group">
              <input
                type="text"
                name="category"
                placeholder="Category"
                value={specification.category}
                onChange={(event) => handleSpecificationChange(index, event)}
                required
              />
              <input
                type="text"
                name="detail"
                placeholder="Detail"
                value={specification.detail}
                onChange={(event) => handleSpecificationChange(index, event)}
                required
              />
            </div>
          ))}
          <button type="button" onClick={addSpecificationField}>
            Add Specification
          </button>
        </div>
        <div className="news-form-group">
          <label>Pros:</label>
          {pros.map((pro, index) => (
            <input
              key={index}
              type="text"
              value={pro}
              onChange={(event) => handleProsChange(index, event)}
              required
            />
          ))}
          <button type="button" onClick={addProsField}>
            Add Pro
          </button>
        </div>
        <div className="news-form-group">
          <label>Cons:</label>
          {cons.map((con, index) => (
            <input
              key={index}
              type="text"
              value={con}
              onChange={(event) => handleConsChange(index, event)}
              required
            />
          ))}
          <button type="button" onClick={addConsField}>
            Add Con
          </button>
        </div>
        <div className="news-form-group">
          <label htmlFor="performanceReview">Performance Review:</label>
          <textarea
            id="performanceReview"
            value={performanceReview}
            onChange={(e) => setPerformanceReview(e.target.value)}
            rows="3"
            required
          />
        </div>
        <div className="news-form-group">
          <label htmlFor="designReview">Design Review:</label>
          <textarea
            id="designReview"
            value={designReview}
            onChange={(e) => setDesignReview(e.target.value)}
            rows="3"
            required
          />
        </div>
        <div className="news-form-group">
          <label htmlFor="conclusion">Conclusion:</label>
          <textarea
            id="conclusion"
            value={conclusion}
            onChange={(e) => setConclusion(e.target.value)}
            rows="3"
            required
          />
        </div>
        <button type="submit" className="news-form-submit-button">Submit</button>
      </form>
    </div>
  );
};

export default ReviewForm;
