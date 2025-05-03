import axios from 'axios';

// config URL
import {config} from './config';

const apiInstance = async () => {
  const api = axios.create({
    baseURL: config.api.base_url,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return api;
};

export default apiInstance;
