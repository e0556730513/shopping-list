// src/services/axiosInstance.ts
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000', // Replace with your NestJS API URL
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;