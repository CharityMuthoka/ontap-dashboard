import axios from "axios";

const API_BASE_URL = "https://dev.ontapke.com/acc/api";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Register API
export const registerUser = (userData) =>
  axiosInstance.post("/register/", userData);

// Login API
export const loginUser = (credentials) =>
  axiosInstance.post("/login/", credentials);

export default axiosInstance;
