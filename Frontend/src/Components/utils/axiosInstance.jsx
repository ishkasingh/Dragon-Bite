import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://192.168.1.6:8080/api",
  withCredentials: true, // Add this if your API requires credentials
});




axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    // console.log(token);x
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers["Content-Type"] = "application/json";``
    }
    return config;
  },
  (error) => Promise.reject(error)
);




export default axiosInstance;
