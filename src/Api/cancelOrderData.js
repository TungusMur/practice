import { api } from './api';

export const cancelOrderData = (dataOrder) =>
  api.delete(`https://api-factory.simbirsoft1.com/api/db/order/${dataOrder}`);
