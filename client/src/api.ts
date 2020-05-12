import axios from "axios";

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export default axios.create({
  baseURL: "http://localhost:3006",
  timeout: 5000,
  withCredentials: true,
  headers: {
    // "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    // "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
    "Content-Type": "application/json"
  }
});
