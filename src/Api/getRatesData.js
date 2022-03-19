import { api } from './api';

export const getRatesData = () => api.get('https://api-factory.simbirsoft1.com/api/db/rate');
