import { api } from './api';

export const postRegisterData = (data) => api.post('/auth/register', { ...data });
