import axios from 'axios';

export const getCategoriesData = () =>
  axios.get('https://api-factory.simbirsoft1.com/api/db/category', {
    headers: { 'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b' },
  });
