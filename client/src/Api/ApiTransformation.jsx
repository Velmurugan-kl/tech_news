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
