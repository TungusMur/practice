import { api } from './api';

export const getFilterStatusData = () => api.get('/db/orderStatus');
