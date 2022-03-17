import axios from 'axios';

export const getPointsData = (cityId) =>
  axios.get(`https://api-factory.simbirsoft1.com/api/db/point?cityId=${cityId}`, {
    headers: { 'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b' },
  });
