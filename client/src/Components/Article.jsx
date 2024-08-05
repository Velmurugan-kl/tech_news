
import React, { useState } from 'react';
import './Article.css';


const Article = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [likes, setLikes] = useState(0);
  const [bookmarked, setBookmarked] = useState(false);


  const article = {
    title: 'The Future of AI: Trends and Predictions',
    author: {
      name: 'Jane Doe',
      bio: 'Jane Doe is a tech journalist with over 10 years of experience covering AI and emerging technologies. She has written for leading tech magazines and is passionate about exploring the ethical implications of AI.',
      avatar: 'https://via.placeholder.com/80',
    },
    date: 'August 5, 2024',
    image: 'https://via.placeholder.com/1200x600', // Article image
    content: `
      Artificial Intelligence (AI) is rapidly evolving, with new advancements emerging at an unprecedented pace. In this article, we explore the future of AI, including the latest trends and predictions for the next decade. From advancements in machine learning to the ethical implications of AI, we cover it all.

      AI is expected to play a crucial role in various sectors, including healthcare, finance, and transportation. For instance, AI-driven diagnostics could revolutionize medical imaging, making it faster and more accurate. Similarly, autonomous vehicles powered by AI could transform transportation, reducing accidents and improving efficiency.

      In healthcare, AI is being used to develop predictive models that can foresee potential health issues before they become critical. This proactive approach not only enhances patient outcomes but also optimizes resource allocation within healthcare systems. Additionally, AI-powered tools are assisting in personalized medicine by analyzing vast amounts of data to tailor treatments to individual patients.

      The financial sector is also experiencing significant changes due to AI. Algorithms that analyze market trends and customer behavior are helping institutions make informed decisions, reduce fraud, and offer personalized financial services. The rise of robo-advisors, powered by AI, is democratizing access to investment strategies that were once only available to wealthy individuals.
    
      In the realm of transportation, self-driving cars are just the tip of the iceberg. AI is being integrated into traffic management systems, leading to more efficient and safer road networks. Future advancements could see AI managing entire fleets of autonomous vehicles, optimizing routes in real-time, and reducing congestion.

      However, with these advancements come significant challenges. Ethical concerns about privacy, security, and the potential for job displacement need to be addressed. The deployment of AI systems must be accompanied by robust regulations and frameworks that ensure transparency and fairness. There is a growing need for interdisciplinary collaboration among policymakers, technologists, and ethicists to address these challenges and develop solutions that benefit society as a whole.

      As we look to the future, one thing is clear: AI will continue to be a driving force behind innovation and change. Staying informed about the latest trends and understanding their implications will be crucial for anyone interested in the field of technology. Embracing AI responsibly and collaboratively will shape a future where technology serves humanity in meaningful and equitable ways.
    `,
    tags: ['AI', 'Technology', 'Future Trends'],
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setComments([...comments, newComment]);
        setNewComment('');
        setIsSubmitting(false);
      }, 1000); // Simulate async submission
    }
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className="article-container">
      <header className="article-header">
        <h1 className="article-title">{article.title}</h1>
        <div className="article-meta">
          <span className="article-author">By {article.author.name}</span>
          <span className="article-date">{article.date}</span>
          <button className="bookmark-button" onClick={handleBookmark}>
            {bookmarked ? 'Unbookmark' : 'Bookmark'}
          </button>
          <button className="like-button" onClick={handleLike}>
            ❤️ {likes}
          </button>
        </div>
      </header>
      <img src={article.image} alt={article.title} className="article-image" />
      <div className="author-bio">
        <img src={article.author.avatar} alt={`${article.author.name}'s avatar`} className="author-avatar" />
        <div className="author-info">
          <h3>About the Author</h3>
          <p>{article.author.bio}</p>
        </div>
      </div>
      <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }} />
      <div className="article-tags">
        <h4>Tags:</h4>
        <ul>
          {article.tags.map((tag, index) => (
            <li key={index} className="tag">{tag}</li>
          ))}
        </ul>
      </div>
      <div className="social-share">
        <h3>Share this article:</h3>
        <a href={`https://twitter.com/share?url=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="social-button twitter">Twitter</a>
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="social-button facebook">Facebook</a>
        <a href={`https://linkedin.com/shareArticle?mini=true&url=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="social-button linkedin">LinkedIn</a>
      </div>

      <div className="related-articles">
        <h3>Related Articles</h3>
        <ul>
          <li><a href="#">Understanding Machine Learning: A Comprehensive Guide</a></li>
          <li><a href="#">The Impact of AI on the Job Market</a></li>
          <li><a href="#">Autonomous Vehicles: How They Will Change the Future</a></li>
        </ul>
      </div>
      <div className="comments-section">
        <h3>Comments</h3>
        <form onSubmit={handleCommentSubmit} className="comment-form">
          <textarea
            value={newComment}
            onChange={handleCommentChange}
            placeholder="Leave a comment..."
            rows="4"
            className="comment-input"
          />
          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
        <div className="comments-list">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={index} className="comment">
                <p>{comment}</p>
              </div>
            ))
          ) : (
            <p>No comments yet. Be the first to comment!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Article;
