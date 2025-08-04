// lib/api.js
import axios from 'axios';

// Axios instance
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
}); 

// Login function
export const loginUser = async (emailpass) => {
    const response = await api.post('/login', emailpass);
    return response.data;
};

// Register function
export const registerUser = async (formfieldsdata) => {
    const response = await api.post('/register', formfieldsdata);
    return response.data;
};

export const logOut = async () => {
  const response = await api.post('/logout');
  return response.data;
};

// Get current user from session
export const getCurrentUser = async () => {
  const response = await api.get('/currentuser');
  return response.data;
};

// Export the Axios instance too (optional, if needed elsewhere)
export default api;
