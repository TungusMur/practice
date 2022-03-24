import { api } from './api';

export const postOrderData = (data) => api.post('https://api-factory.simbirsoft1.com/api/db/order', { ...data });
