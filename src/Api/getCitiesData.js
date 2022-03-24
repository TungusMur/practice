import { api } from './api';

export const getCitiesData = () => api.get('https://api-factory.simbirsoft1.com/api/db/city');
