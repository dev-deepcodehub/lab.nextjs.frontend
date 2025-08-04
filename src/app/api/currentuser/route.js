import axios from 'axios';

// Axios instance
const api = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  baseURL: 'https://dev.digilabpro.com',
  withCredentials: true,
}); 

// Get current user from session
export const getCurrentUser = async () => {
  const response = await api.get('/currentuser');
  return response.data;
};

// Export the Axios instance too (optional, if needed elsewhere)
export default api;
