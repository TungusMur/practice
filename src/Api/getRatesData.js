import axios from 'axios';

export const getRatesData = () =>
  axios.get('https://api-factory.simbirsoft1.com/api/db/rate', {
    headers: { 'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b' },
  });
