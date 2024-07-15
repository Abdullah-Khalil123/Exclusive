import axios from "axios";
import { EXPRESS_BASE_URI } from "./contants";

const axiosInstance = axios.create({
  baseURL: EXPRESS_BASE_URI,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
