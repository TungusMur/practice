import { api } from './api';

export const getCategoriesData = () => api.get('/db/category');
