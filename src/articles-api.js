import axios from "axios";

axios.defaults.baseURL = "http://hn.algolia.com/api/v1";

export const getArticles = async (topic, page) => {
  const fetchedArticles = await axios.get("/search", {
    params: {
      query: topic,
      page: page,
      hitsPerPage: 5,
    },
  });
  return fetchedArticles.data.hits;
};
