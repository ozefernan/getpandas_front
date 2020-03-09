/* eslint-disable no-param-reassign */
import axios from 'axios';
import { getToken } from './auth';

// const api = axios.create({
//   baseURL: 'http://0.0.0.0:8000/',
// });

const api = axios.create({
  baseURL: 'http://35.175.232.136/',
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
