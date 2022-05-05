import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_API,
  headers: {
    'X-Api-Factory-Application-Id': process.env.REACT_APP_APPLICATION_ID,
    'Content-Type': 'application/json',
  },
});
