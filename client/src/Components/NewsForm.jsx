import React, { useState } from 'react';
import axios from 'axios'; // Ensure axios is installed: npm install axios
import './NewsForm.css'; // Your updated CSS file

const NewsForm = () => {
  const [title, setTitle] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [authorBio, setAuthorBio] = useState('');
  const [authorAvatar, setAuthorAvatar] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [tags, setTags] = useState('');
  const [relatedArticles, setRelatedArticles] = useState([{ title: '', url: '' }]);

  const handleRelatedArticleChange = (index, field, value) => {
    const updatedArticles = [...relatedArticles];
    updatedArticles[index][field] = value;
    setRelatedArticles(updatedArticles);
  };

  const addRelatedArticle = () => {
    setRelatedArticles([...relatedArticles, { title: '', url: '' }]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.get('http://localhost:3001/articles');
      const articles = response.data;
      const lastId = articles.length > 0 ? articles.length : 0;
      const newId = lastId + 1;
  
      const postData = {
        author: {
          name: authorName,
          bio: authorBio,
          avatar: authorAvatar,
        },
        id: newId,  // Ensure the new ID is set here
        title,
        date: new Date().toLocaleDateString(),
        image,
        content,
        tags: tags.split(',').map((tag) => tag.trim()),
        relatedArticles: relatedArticles.filter(
          (article) => article.title && article.url
        ),
      };
  
      await axios.post('http://localhost:3001/articles', [postData], {
        headers: {
          'Content-Type': 'application/json',
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
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="news-form-group">
          <label htmlFor="authorName">Author Name:</label>
          <input
            type="text"
            id="authorName"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            required
          />
        </div>
        <div className="news-form-group">
          <label htmlFor="authorBio">Author Bio:</label>
          <textarea
            id="authorBio"
            value={authorBio}
            onChange={(e) => setAuthorBio(e.target.value)}
            rows="3"
            required
          />
        </div>
        <div className="news-form-group">
          <label htmlFor="authorAvatar">Author Avatar URL:</label>
          <input
            type="url"
            id="authorAvatar"
            value={authorAvatar}
            onChange={(e) => setAuthorAvatar(e.target.value)}
          />
        </div>
        <div className="news-form-group">
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="5"
            required
          />
        </div>
        <div className="news-form-group">
          <label htmlFor="image">Image URL:</label>
          <input
            type="url"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <div className="news-form-group">
          <label htmlFor="tags">Tags (comma-separated):</label>
          <input
            type="text"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>
        <div className="news-form-group">
          <label>Related Articles:</label>
          {relatedArticles.map((article, index) => (
            <div key={index} className="related-article">
              <input
                type="text"
                placeholder="Title"
                value={article.title}
                onChange={(e) =>
                  handleRelatedArticleChange(index, 'title', e.target.value)
                }
              />
              <input
                type="url"
                placeholder="URL"
                value={article.url}
                onChange={(e) =>
                  handleRelatedArticleChange(index, 'url', e.target.value)
                }
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addRelatedArticle}
            className="add-article-button"
          >
            Add Related Article
          </button>
        </div>
        <button type="submit" className="news-form-submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewsForm;
