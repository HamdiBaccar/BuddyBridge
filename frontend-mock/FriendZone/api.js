import axios from 'axios';

const API_URL = 'http://localhost:3000'; 

const api = axios.create({
  baseURL: API_URL,
});

export const signup = async (userData) => {
  return await api.post('/api/auth/signup', userData);
};
