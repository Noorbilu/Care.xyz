import axios from 'axios';

const backendBase = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';

export const api = axios.create({
  baseURL: backendBase + '/api',
});