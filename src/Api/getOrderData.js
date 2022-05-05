import { api } from './api';

export const getOrderData = (orderId) => api.get(`/db/order/${orderId}`);
