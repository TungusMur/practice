import axios from 'axios';

export const api = axios.create({
  headers: {
    'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
    'Content-Type': 'application/json',
  },
});
