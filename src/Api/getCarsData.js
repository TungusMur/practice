import { api } from './api';

export const getCarsData = () => api.get('/db/car');
