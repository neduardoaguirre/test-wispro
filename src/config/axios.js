import axiosInstance from 'axios';

const axios = axiosInstance.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

export default axios;
