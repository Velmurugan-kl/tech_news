import axios from 'axios';

// API for Headlines
const API_URL = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=bed8e558d1164681b34f759714c7c35d';

export const fetchNewsData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news data:', error);
    return [];
  }
};

export const transformNewsData = (apiData) => {
  return apiData.map((item) => ({
    id: item.source.id || 'default', // Use actual ID if available
    title: item.title,
    description: item.description,
    img: item.urlToImage,
    author: item.author,
    date: item.publishedAt,
    page: item.url,
  }));
};

// API for Reviews
const API_URL1 = 'https://tech-news-1.onrender.com/reviews';

// Fetch all reviews
export const fetchReviewData = async () => {
  try {
    const response = await axios.get(API_URL1);
    return response.data;
  } catch (error) {
    console.error('Error fetching review data:', error);
    return [];
  }
};

// Fetch a specific review by id
export const fetchGadgetDataById = async (id) => {
  try {
    const response = await axios.get(`${API_URL1}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching gadget data by ID ${id}:`, error);
    return null;
  }
};

// API for Articles
const API_URL2 = 'https://tech-news-1.onrender.com/articles'; 

export const fetchArticleData = async () => {
  try { 
    const response = await axios.get(API_URL2);
    return response.data;
  } catch (error) {
    console.error('Error fetching review data:', error);
    return [];
  }
};

// Fetch a specific article by id
export const fetchArticleDataById = async (id) => {
  try {
    const response = await axios.get(`${API_URL2}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching article data by ID ${id}:`, error);
    return null;
  }
};
