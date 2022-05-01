import { api } from './api';

export const postLogoutData = (accessToken) =>
  api.post('https://api-factory.simbirsoft1.com/api/auth/logout', { headers: { Authorization: `Bearer ${accessToken}` } });
