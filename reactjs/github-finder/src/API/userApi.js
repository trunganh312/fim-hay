import axiosClient from './axiosClient';

const userApi = {
  getRepos(login, params) {
    const url = `/users/${login}/repos`;
    return axiosClient.get(url, { params });
  },

  get(paramsString) {
    const url = `/search/users?${paramsString}`;
    return axiosClient.get(url);
  },

  getUser(login) {
    const url = `/users/${login}`;
    return axiosClient.get(url);
  },
};

export default userApi;
