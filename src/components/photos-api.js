import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchPhotos = async (topic, page) => {
  const response = await axios.get("/search/photos", {
    params: {
      client_id: "ki-asPVD80NAe5f5un1xHT4E4XzHbQVjZFKbaoosSFI",
      query: topic,
      page: page,
      per_page: 10,
    },
  });
  return response.data.results;
};
