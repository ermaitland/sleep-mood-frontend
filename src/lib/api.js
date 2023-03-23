import axios from 'axios';
import { AUTH } from './auth';

const ENDPOINTS = {
  alldays: `/api/days/`,
  login: `/api/auth/login/`,
  register: `/api/auth/register/`,
  moods: `/api/mood/`
};

const getHeaders = () => ({
  headers: { Authorization: `Bearer ${AUTH.getToken()}` }
});

const GET = (endpoint, headers = null) => axios.get(endpoint, headers);
const POST = (endpoint, body, headers) =>
  headers ? axios.post(endpoint, body, headers) : axios.post(endpoint, body);
const PUT = (endpoint, body, headers) => axios.put(endpoint, body, headers);
const DELETE = (endpoint, headers) => axios.delete(endpoint, headers);

export const API = { GET, POST, PUT, DELETE, ENDPOINTS, getHeaders };
