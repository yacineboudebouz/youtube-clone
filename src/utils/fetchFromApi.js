import axios from "axios";

const Base_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  url: Base_URL,
  params: {
    part: "snippet",
    videoId: "M7FIvfx5J10",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${Base_URL}/${url}`, options);
  return data;
};
