import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    console.log("[for debugging..]", response);
    return response;
  },
  (error) => {
    // SET 🔥🔥🔥
    error.message = error.response.data.detail;
    return Promise.reject(error);
  }
);
export default axiosInstance;
