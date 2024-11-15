import express from 'express';
import Article from '../Model/Article.js'; // Adjust the path as necessary

const route2 = express.Router();

// GET route to fetch all articles
route2.get('/articles', async (req, res) => {
  try {
    const articles = await Article.find();
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET route to fetch an article by ID
route2.get('/articles/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id); // Convert the ID to an integer
    const article = await Article.findOne({ id: id }); // Find the article by the integer ID
    if (article) {
      res.status(200).json(article);
    } else {
      res.status(404).json({ error: 'Article not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// POST route to create a new article
route2.post('/articles', async (req, res) => {
    try {
      // Extract the array of articles from the request body
      const articles = req.body;
  
      // Ensure the request body is an array
      if (!Array.isArray(articles)) {
        return res.status(400).json({ error: 'Request body must be an array of articles' });
      }
  
      // Create multiple new articles and save them
      const newArticles = await Article.insertMany(articles);
  
      res.status(201).json(newArticles);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

route2.delete('/articles/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id); // Convert the ID to an integer

    // Find and delete the article by ID
    const deletedArticle = await Article.findOneAndDelete({ id: id });

    if (deletedArticle) {
      res.status(200).json({ message: 'Article deleted successfully' });
    } else {
      res.status(404).json({ error: 'Article not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE route to remove an article by title
route2.delete('/articles/title/:title', async (req, res) => {
  try {
    const title = req.params.title; // Get the title from the request parameters

    // Find and delete the article by title
    const deletedArticle = await Article.findOneAndDelete({ title: title });

    if (deletedArticle) {
      res.status(200).json({ message: 'Article deleted successfully' });
    } else {
      res.status(404).json({ error: 'Article not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});



export default route2;
