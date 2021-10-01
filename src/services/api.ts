import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-to-chalenge.vercel.app/api',
});

export default api;
