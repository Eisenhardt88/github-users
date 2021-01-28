import axios from "axios";

export const BASE_URL = "https://api.github.com";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;
    return response;
  },
  (error) => {
    if (error && error.data) return Promise.reject(error.data);
    return Promise.reject(error.data);
  }
);

export default axiosInstance;
