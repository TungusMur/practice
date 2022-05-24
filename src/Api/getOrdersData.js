import { api } from './api';

export const getOrdersData = (accessToken, page, filters) =>
  api.get(`/db/order?page=${page}&limit=4${filters}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
