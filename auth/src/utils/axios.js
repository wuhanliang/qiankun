import Axios from "axios";

const axios = Axios.create({
  timeout: 10000,
  baseURL: process.env.REACT_APP_API_URL,
});

axios.interceptors.request.use(
  (config) => {
    config.headers = {
      "Content-Type": "application/json",
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
