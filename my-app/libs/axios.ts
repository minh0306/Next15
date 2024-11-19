import { API_BASE_URL } from "@/config";
import Axios from "axios";
import toast from "react-hot-toast";

export const axios = Axios.create({
  baseURL: API_BASE_URL,
});

axios.interceptors.request.use((req) => {
  const token = localStorage.getItem("JWT_TOKEN");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    toast.error(message);
    if (error.response?.status == 401) {
      location.href = "/login";
    }

    return Promise.reject(message);
  }
);
