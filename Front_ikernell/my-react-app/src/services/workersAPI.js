import api from './api';

export const workersAPI = {
  getAll: () => api.get('/workers'),
  getById: (id) => api.get(`/workers/${id}`),
  create: (data) => api.post('/workers', data),
  delete: (id) => api.delete(`/workers/${id}`),
};
