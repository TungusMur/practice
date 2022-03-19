import { api } from './api';

export const getCarsData = () => api.get('https://api-factory.simbirsoft1.com/api/db/car');
