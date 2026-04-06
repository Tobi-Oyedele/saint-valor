import axios from "axios";
import { useAuthStore } from "@/store/authStore";

const api = axios.create({
  baseURL: "https://backend-qh97.onrender.com/api/v1",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;

    if (status === 401 || status === 403) {
      // Clear localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("firstName");

      // Clear Zustand store without using the hook
      useAuthStore.getState().clearAuth();

      // Redirect to sign in
      window.location.href = "/sign-in";
    }

    return Promise.reject(error);
  },
);

export default api;
