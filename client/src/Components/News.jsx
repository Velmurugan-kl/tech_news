import React from 'react';
import './News.css'; // Make sure to link to the correct CSS file
import ReviewBox from './ReviewBox';

const specifications = [
  { category: 'Processor', detail: 'Intel Core i7-13700H' },
  { category: 'RAM', detail: '16GB LPDDR5' },
  { category: 'Storage', detail: '1TB SSD' },
  { category: 'Display', detail: '13.4-inch FHD+ (1920 x 1200)' },
  { category: 'Graphics', detail: 'Intel Iris Xe' },
  { category: 'Battery', detail: '52WHr' },
  { category: 'Ports', detail: '2x Thunderbolt 4, 1x USB-C 3.2, 1x MicroSD card reader, 1x Headphone jack' },
  { category: 'Weight', detail: '1.26 kg (2.77 lbs)' },
  { category: 'Dimensions', detail: '295 x 198 x 14.8 mm' },
  { category: 'Operating System', detail: 'Windows 11 Home' }
];

function News({ cardId }) {
  return (
    <div className="review-container">
      <div className="header">
        <h1>Dell XPS 13 (9345) Review</h1>
      </div>
      <div className="review-content">
        <div className="review-hero">
          <img src="path/to/your/image.jpg" alt="Dell XPS 13" className="hero-image" />
          <div className="hero-text">
            <h2>Powerful and Sleek</h2>
            <p>
              The Dell XPS 13 (9345) is a powerful ultrabook that combines sleek design with top-notch performance.
            </p>
          </div>
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
          <h2>Pros and Cons {cardId}</h2>
          <table className="pros-cons-table">
            <tbody>
              <tr>
                <td className="pros">
                  <h3>Pros</h3>
                  <ul>
                    <li>Excellent performance and build quality</li>
                    <li>Lightweight and portable</li>
                    <li>Great display</li>
                    <li>Long battery life</li>
                  </ul>
                </td>
                <td className="cons">
                  <h3>Cons</h3>
                  <ul>
                    <li>Expensive</li>
                    <li>Limited port selection</li>
                    <li>Non-upgradable RAM</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="performance-review">
          <h2>Performance Review</h2>
          <p>
            The Dell XPS 13 delivers outstanding performance with its Intel Core i7 processor and ample RAM.
          </p>
        </div>
        <div className="design-review">
          <h2>Design Review</h2>
          <p>
            With its sleek, minimalist design, the Dell XPS 13 is both aesthetically pleasing and functional.
          </p>
        </div>
        <div className="conclusion">
          <h2>Conclusion</h2>
          <p>
            The Dell XPS 13 (9345) is a high-end ultrabook that excels in performance, design, and battery life.
          </p>
        </div>
        <div>
          <ReviewBox/>
        </div>
      </div>
      <div className="footer">
        <p>&copy; 2024 Dell XPS Reviews</p>
      </div>
    </div>
  );
}

export default News;