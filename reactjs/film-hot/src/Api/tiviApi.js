const { default: instance } = require("./axiosClient");
const { API_KEY } = require("./constant");

const TiviApi = {
  // lấy ra danh sách phim
  getAll(params) {
    const url = `tv/popular?api_key=${API_KEY}`;
    return instance.get(url, { params });
  },

  // lấy ra chi tiết 1 phim
  getDetail(id) {
    const url = `tv/${id}?api_key=${API_KEY}`;
    return instance.get(url);
  },

  // lấy ra ds phim tương tự
  getSimilar(id) {
    const url = `tv/${id}/similar?api_key=${API_KEY}`;
    return instance.get(url);
  },

  // Lấy ra ds phim đề xuất
  getRecommended(id) {
    const url = `tv/${id}/recommendations?api_key=${API_KEY}`;
    return instance.get(url);
  },

  // Lấy ra các phim có rating cao nhất
  getTopRating() {
    const url = `tv/top_rated?api_key=${API_KEY}`;
    return instance.get(url);
  },

  // Trending 24h
  getTrending24h() {
    const url = `trending/tv/day?api_key=${API_KEY}`;
    return instance.get(url);
  },

  getCast(id) {
    const url = `tv/${id}/credits?api_key=${API_KEY}`;
    return instance.get(url);
  },

  getWatch(id) {
    const url = `tv/${id}/videos?api_key=${API_KEY}`;
    return instance.get(url);
  },

  // Lấy ra bộ truyền hình
  getTV(id, seasonId, episoId, params) {
    const url = `tv/${id}/season/${seasonId}/episode/${episoId}?api_key=${API_KEY}`;
    return instance.get(url, { params });
  },
};

export default TiviApi;
