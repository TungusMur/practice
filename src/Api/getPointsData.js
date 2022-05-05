import { api } from './api';

export const getPointsData = (cityId) => api.get(`/db/point?cityId=${cityId}`);
