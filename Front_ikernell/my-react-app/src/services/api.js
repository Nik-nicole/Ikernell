import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Projects API
export const projectsAPI = {
  getAll: () => api.get('/project'),
  getById: (id) => api.get(`/project/${id}`),
  create: (projectData) => api.post('/project/add', projectData),
  update: (projectData) => api.post('/project/update', projectData),
  delete: (id) => api.delete(`/project/delete/${id}`),
};

// Workers API
export const workersAPI = {
  getAll: () => api.get('/workers'),
  getById: (id) => api.get(`/workers/worker/${id}`),
  create: (workerData) => api.post('/workers/add', workerData),
  delete: (id) => api.delete(`/workers/delete/${id}`),
};

// Users API
export const usersAPI = {
  getAll: () => api.get('/User'),
  getById: (id) => api.get(`/User/${id}`),
  create: (userData) => api.post('/User/add', userData),
  delete: (id) => api.delete(`/User/delete/${id}`),
};

// Type Workers API
export const typeWorkersAPI = {
  getAll: () => api.get('/type_worker'),
  getById: (id) => api.get(`/type_worker/${id}`),
  create: (typeWorkerData) => api.post('/type_worker/add', typeWorkerData),
  update: (typeWorkerData) => api.post('/type_worker/update', typeWorkerData),
  delete: (id) => api.delete(`/type_worker/delete/${id}`),
};

export default api;
