import { api } from './api';

export const getFilterModelsData = (accessToken) =>
  api.get('/db/car?sort[name]=1');
