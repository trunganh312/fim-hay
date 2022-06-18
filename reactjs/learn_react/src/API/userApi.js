import axiosClient from './axiosClient';

const useApi = {
  register(data) {
    const url = '/auth/local/register';
    return axiosClient.post(url, data);
  },
};

export default useApi;
