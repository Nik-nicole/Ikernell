import api from './api';

export const typeWorkersAPI = {
  getAll: () => api.get('/type-workers'),
  getById: (id) => api.get(`/type-workers/${id}`),
  create: (data) => api.post('/type-workers', data),
  update: (id, data) => api.put(`/type-workers/${id}`, data),
  delete: (id) => api.delete(`/type-workers/${id}`),
};
