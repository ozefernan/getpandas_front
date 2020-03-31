/* eslint-disable no-param-reassign */
import axios from 'axios';
import { getToken } from './auth';

// const api = axios.create({
//   baseURL: 'http://0.0.0.0:8000/',
// });

const api = axios.create({
  baseURL: 'http://34.226.249.190/',
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `token ${token}`;
  }
  return config;
});

export default api;
