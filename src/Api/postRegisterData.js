import { api } from './api';

export const postRegisterData = (data) => api.post('https://api-factory.simbirsoft1.com/api/auth/register', { ...data });
