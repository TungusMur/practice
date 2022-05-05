import { api } from './api';

export const postLoginData = (data) =>
  api.post(
    '/auth/login',
    { ...data },
    { headers: { Authorization: 'Basic ' + btoa(process.env.REACT_APP_TOKEN_AND_SECRET) } }
  );
