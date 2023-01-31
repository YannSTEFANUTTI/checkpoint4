/* eslint-disable import/no-extraneous-dependencies */
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.BACKEND_URL ?? "http://localhost:8000/",
});

export default api;
