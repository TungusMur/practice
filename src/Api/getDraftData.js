import axios from 'axios';

export const getDraftData = () =>
  axios.get('https://api-factory.simbirsoft1.com/api/db/rateType', {
    headers: { 'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b' },
  });
