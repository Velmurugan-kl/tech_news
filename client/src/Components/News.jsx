import React from 'react';
import './News.css';
import ReviewBox from './ReviewBox';

function News({ newsData }) {
  const {
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
  } = newsData;

  return (
    <div className="review-container">
      <div className="header">
        <h1>{title}</h1>
      </div>
      <div className="review-content">
        <div className="review-hero">
          <div className="hero-text">
            <h2>{heroText}</h2>
            <p>{heroDescription}</p>
          </div>
          <img src={image} alt={title} className="hero-image" />
        </div>
        <div className="specifications">
          <h2>Specifications</h2>
          <table className="spec-table">
            <tbody>
              {specifications.map((spec, index) => (
                <tr key={index}>
                  <td>{spec.category}</td>
                  <td>{spec.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pros-cons">
          <h2>Pros and Cons</h2>
          <table className="pros-cons-table">
            <tbody>
              <tr>
                <td className="pros">
                  <h3>Pros</h3>
                  <ul>
                    {pros.map((pro, index) => (
                      <li key={index}>{pro}</li>
                    ))}
                  </ul>
                </td>
                <td className="cons">
                  <h3>Cons</h3>
                  <ul>
                    {cons.map((con, index) => (
                      <li key={index}>{con}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="performance-review">
          <h2>Performance Review</h2>
          <p>{performanceReview}</p>
        </div>
        <div className="design-review">
          <h2>Design Review</h2>
          <p>{designReview}</p>
        </div>
        <div className="conclusion">
          <h2>Conclusion</h2>
          <p>{conclusion}</p>
        </div>
        <div>
          <ReviewBox />
        </div>
      </div>
      <div className="footer">
        <p>&copy; 2024 Tech Reviews</p>
      </div>
    </div>
  );
}

export default News;
