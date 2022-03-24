import { api } from './api';

export const getPointsData = (cityId) => api.get(`https://api-factory.simbirsoft1.com/api/db/point?cityId=${cityId}`);
