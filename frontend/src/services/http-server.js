import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:5004/api/",
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});
export default http;
