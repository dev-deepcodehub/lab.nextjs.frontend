import axios from 'axios';

const api = axios.create({
  baseURL: '/api', // points to Next.js API routes
  withCredentials: true,
});

export const getCurrentUser = async () => {
  const response = await api.get('/currentuser');
  return response.data;
};