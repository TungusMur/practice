import { api } from './api';

export const postOrderData = (data) => api.post('/db/order', { ...data });
