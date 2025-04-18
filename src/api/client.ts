import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL ?? "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});
