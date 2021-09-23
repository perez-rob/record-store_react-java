import ky from 'ky';

const baseUrl = 'http://localhost:8080/records';

const api = {
  index(id = null) {
    if (!id) return ky.get(baseUrl).json();
    return ky.get(`${baseUrl}/${id}`).json();
  },

  update(payload, id) {
    return ky.put(`${baseUrl}/${id}`, { json: payload });
  },

  create(payload) {
    return ky.post(baseUrl, { json: payload }).json();
  },

  delete(id) {
    return ky.delete(`${baseUrl}/${id}`);
  },
};

export default api;