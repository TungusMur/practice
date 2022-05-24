import { api } from './api';

export const getFilterCitiesData = () => api.get('/db/city');
