const { default: instance } = require("./axiosClient");
const { API_KEY } = require("./constant");

const searchApi = {
  // lấy ra danh sách phim
  getSearch(params) {
    const url = `search/multi?api_key=${API_KEY}`;
    return instance.get(url, { params });
  },
};

export default searchApi;
