import { api } from './api';

export const getDraftData = () => api.get('https://api-factory.simbirsoft1.com/api/db/order');
