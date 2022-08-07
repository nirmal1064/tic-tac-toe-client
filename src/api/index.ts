import axios from "axios";

const baseURL = import.meta.env.VITE_SOCKET_IO_HOST;

const API = axios.create({
  baseURL,
  withCredentials: true,
  headers: { "Content-type": "application/json" }
});

export default API;
