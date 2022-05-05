import { api } from './api';

export const getRatesData = () => api.get('/db/rate');
