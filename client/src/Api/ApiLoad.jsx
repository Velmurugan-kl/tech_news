import axios from 'axios';

/* API for haead lines */

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
      id: "default",
      title: item.title,
      description: item.description,
      img: item.urlToImage,
      author: item.author,
      date: item.publishedAt,
      page: item.url,
    }));
  };
 

/* API for Review*/

const API_URL1 = 'https://apigenerator.dronahq.com/api/ZSFa8Zy8/Reviewcard';

export const fetchReviewData = async () => {
  try {
    const response = await axios.get(API_URL1);
    return response.data[0].reviews;
  } catch (error) {
    console.error('Error fetching news data:', error);
    return [];
  }
};

export const fetchGadgetDataById = async (id) => {
  try {
    const response = await axios.get(API_URL1);
    const data = response.data[0].reviews.find(item => item.id === id);
    return data;
  } catch (error) {
    console.error('Error fetching gadget data by ID:', error);
    return null;
  }
};
