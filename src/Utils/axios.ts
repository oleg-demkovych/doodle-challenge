import axios from 'axios';
import { loadProgressBar } from 'axios-progress-bar';

const api = axios.create({
  baseURL: process.env.API_URL,
  responseType: 'json',
  headers: {
    'Content-type': 'application/json',
    token: process.env.API_TOKEN,
  },
});

loadProgressBar(null, api);

const enhancedApi = {
  ...api,
  request: api.request,
};

export default enhancedApi;
