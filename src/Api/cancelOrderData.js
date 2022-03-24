import { api } from './api';

export const cancelOrderData = (dataOrder) =>
  api.put(`https://api-factory.simbirsoft1.com/api/db/order/${dataOrder.id}`, { ...dataOrder });
