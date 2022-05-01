import { api } from './api';

export const postRefreshData = (refreshToken) =>
  api.post(
    'https://api-factory.simbirsoft1.com/api/auth/refresh',
    { refresh_token: refreshToken },
    { headers: { Authorization: 'Basic ' + btoa('c053b339efaefd7609e45ee9c7dbe194:4cbcea96de') } }
  );
