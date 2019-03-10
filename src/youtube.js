import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: process.env.REACT_APP_API_KEY
  }
});
