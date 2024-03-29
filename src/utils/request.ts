import { useUsersStore } from "@/stores/user";
import axios from "axios";
import { ElMessage } from "element-plus";

const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 60000,
});

// Request interceptors
request.interceptors.request.use(
  (config) => {
    const store = useUsersStore();
    if (store.token) {
      config.headers["Authorization"] = `Bearer ${store.token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// Response interceptors
request.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const errorResponse = JSON.parse(error.request.response);
    if (errorResponse.statusCode !== 401) {
      ElMessage({
        message: errorResponse.message,
        type: "error",
        duration: 5 * 1000,
      });
    }
    return Promise.reject(error);
  }
);

export default request;
