import axios from './axios';

export const registerUser = (data: { email: string; password: string }) =>
  axios.post('/auth/register', data);

export const loginUser = (data: { email: string; password: string }) =>
  axios.post('/auth/login', data);
