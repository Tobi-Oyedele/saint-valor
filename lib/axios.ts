import axios from "axios";

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
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("firstName");
      document.cookie =
        "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

      // avoid redirect loop if already on sign-in
      if (!window.location.pathname.includes("/sign-in")) {
        window.location.href = "/sign-in";
      }
    }
    return Promise.reject(error);
  },
);

export default api;
