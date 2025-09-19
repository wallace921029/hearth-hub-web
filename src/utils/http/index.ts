import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api",
  timeout: 1000 * 60,
});

axiosInstance.interceptors.request.use((config) => {
  // You can add authorization headers or other custom headers here
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    const { code, data, message } = response.data;

    if (code !== 200) {
      return Promise.reject(new Error(message || "Error"));
    }

    return data;
  },
  (error) => {
    // Handle global errors here
    if (error.response && error.response.status === 401) {
      // For example, redirect to sign-in page
      window.location.href = "/sign-in";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
