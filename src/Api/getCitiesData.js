import { api } from './api';

export const getCitiesData = () => api.get('/db/city');
