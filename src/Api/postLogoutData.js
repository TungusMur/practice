import { api } from './api';

export const postLogoutData = (accessToken) =>
  api.post('/auth/logout', { headers: { Authorization: `Bearer ${accessToken}` } });
