import { api } from './api';

export const cancelOrderData = (dataOrder) =>
  api.delete(`/db/order/${dataOrder}`);
