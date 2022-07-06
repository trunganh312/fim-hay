const { default: instance } = require("./axiosClient");
const { API_KEY } = require("./constant");

const moviesApi = {
  // lấy ra danh sách phim
  getAll(params) {
    const url = `movie/popular?api_key=${API_KEY}`;
    return instance.get(url, { params });
  },

  // lấy ra chi tiết 1 phim
  getDetail(id) {
    const url = `movie/${id}?api_key=${API_KEY}`;
    return instance.get(url);
  },

  // lấy ra ds phim tương tự
  getSimilar(id) {
    const url = `movie/${id}/similar?api_key=${API_KEY}`;
    return instance.get(url);
  },

  // Lấy ra ds phim đề xuất
  getRecommended(id) {
    const url = `movie/${id}/recommendations?api_key=${API_KEY}`;
    return instance.get(url);
  },

  // Lấy ra các phim có rating cao nhất
  getTopRating() {
    const url = `movie/top_rated?api_key=${API_KEY}`;
    return instance.get(url);
  },

  // Trending 24h
  getTrending24h() {
    const url = `trending/movie/day?api_key=${API_KEY}`;
    return instance.get(url);
  },

  // nhận diễn viên của bộ phim
  getCast(id) {
    const url = `movie/${id}/credits?api_key=${API_KEY}`;
    return instance.get(url);
  },
};

export default moviesApi;
