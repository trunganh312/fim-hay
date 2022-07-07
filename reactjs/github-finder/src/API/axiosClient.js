import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `token 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`,
  },
});

export default axiosClient;
