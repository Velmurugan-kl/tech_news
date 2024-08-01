// src/services/apiService.js
import axios from 'axios';

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
 