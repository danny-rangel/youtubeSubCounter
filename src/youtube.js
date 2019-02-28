import axios from "axios";

const KEY = "AIzaSyDCSVsGoiQKb3-IAVnxABTjoYwbyiRnLTI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet,contentDetails,statistics",
    key: KEY
  }
});
