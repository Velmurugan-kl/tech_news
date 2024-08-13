import React from "react";
import "./Article.css";

const Article = ({ articleData, onClose }) => {
  // Ensure articleData exists before destructuring
  if (!articleData) {
    return null; // or you could return a loading spinner or placeholder content
  }

  const { title, author, date, image, content, tags, relatedArticles } = articleData;

  return (
    <div className="article-container">
      <div className="close">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
      </div>
      <header className="article-header">
        <h1 className="article-title">{title}</h1>
        <div className="article-meta">
          <span className="article-author">By {author?.name || "Unknown Author"}</span>
          <span className="article-date">{date}</span>
        </div>
      </header>
      {image && <img src={image} alt={title} className="article-image" />}
      {author && (
        <div className="author-bio">
          {author.avatar && (
            <img
              src={author.avatar}
              alt={`${author.name}'s avatar`}
              className="author-avatar"
            />
          )}
          <div className="author-info">
            <h3>About the Author</h3>
            <p>{author.bio}</p>
          </div>
        </div>
      )}
      <div className="article-content">
        <p>{content}</p>
      </div>
      {tags && tags.length > 0 && (
        <div className="article-tags">
          <h4>Tags:</h4>
          <ul>
            {tags.map((tag, index) => (
              <li key={index} className="tag">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      )}
      {relatedArticles && relatedArticles.length > 0 && (
        <div className="related-articles">
          <h3>Related Articles</h3>
          <ul>
            {relatedArticles.map((relatedArticle) => (
              <li key={relatedArticle._id}>
                <a href={relatedArticle.url}>{relatedArticle.title}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Article;
