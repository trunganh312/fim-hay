import axios from 'axios';

const cardsApi = {
  getAll(params) {
    const url = 'http://localhost:5000/cards';
    return axios.get(url, { params });
  },

  get(id) {
    const url = `http://localhost:5000/cards/${id}`;
    return axios.get(url);
  },

  add(data) {
    const url = 'http://localhost:5000/cards';
    return axios.post(url, data);
  },

  update(data) {
    const url = `http://localhost:5000/cards/${data.id}`;
    return axios.patch(url, data);
  },

  remove(id) {
    const url = `http://localhost:5000/cards/${id}`;
    return axios.delete(url);
  }
};

export default cardsApi;
