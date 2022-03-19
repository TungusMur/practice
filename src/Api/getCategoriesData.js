import { api } from './api';

export const getCategoriesData = () => api.get('https://api-factory.simbirsoft1.com/api/db/category');
