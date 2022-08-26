import axios from 'axios';

export const API_URL =
  process.env.NEXT_PUBLIC_API || 'http://localhost:8000/api';

const axiosInstance = axios.create({
  baseURL: API_URL,
});

// hello

export default axiosInstance;