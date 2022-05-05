import { api } from './api';

export const postRefreshData = (refreshToken) =>
  api.post(
    '/auth/refresh',
    { refresh_token: refreshToken },
    { headers: { Authorization: 'Basic ' + btoa(process.env.REACT_APP_TOKEN_AND_SECRET) } }
  );
