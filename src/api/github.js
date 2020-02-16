import axios from "axios";

export default axios.create({
  baseURL: "https://api.github.com",
  params: {
    client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
    client_secret: process.env.REACT_APP_GITHUB_CLIENT_SECRET
  }
});
