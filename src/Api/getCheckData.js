import { api } from './api';

export const getCheckData = (data = 'a7c834f671cd90d36f1fbd9c57542a2b209424f1') =>
  api.get(
    'https://api-factory.simbirsoft1.com/api/auth/check',
    {
      access_token: data,
    },
    { headers: { Authorization: 'Basic ' + btoa('c053b339efaefd7609e45ee9c7dbe194:4cbcea96de') } }
  );
