import axios from "axios";
import http from "http"; // Import the 'http' module

const baseURL = `${process.env.BACKEND_URL}`;
const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: { "Content-Type": "application/json" },
  httpAgent: new http.Agent({ keepAlive: true }), // Use the 'http' Agent for HTTP requests
});

export default axiosInstance;
