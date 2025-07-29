// lib/api.js
import axios from 'axios';

// Axios instance
const api = axios.create({
  baseURL: 'http://localhost:8080',
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

// Export the Axios instance too (optional, if needed elsewhere)
export default api;
