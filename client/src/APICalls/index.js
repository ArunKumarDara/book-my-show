import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 10000,
  headers: {
    credentials: "include",
    "Content-Type": "application/json",
    Authorization: `bearer ${
      localStorage?.getItem("tokenForBookMyShow") || ""
    }`,
  },
});
