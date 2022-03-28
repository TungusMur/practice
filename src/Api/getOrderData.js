import { api } from './api';

export const getOrderData = (orderId) => api.get(`https://api-factory.simbirsoft1.com/api/db/order/${orderId}`);
