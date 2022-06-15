import Axios from 'axios';
import { getToken } from './auth';
import { backendURL } from './constants';

const axios = Axios.create({
  timeout: 30000,
  baseURL: backendURL
});

axios.interceptors.request.use(config => {
  // show request in console during development
  if (process.env.NODE_ENV === 'development') {
    console.info('✉️ ', config.method?.toUpperCase() + ' ' + config.url);
  }
  config.headers = {
    Authorization: `Bearer ${getToken()}`
  };
  return config;
});

export default axios;
