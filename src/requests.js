// const api_key = "bb6fd602c35749d30af3c274e2972283";
const api_key = import.meta.env.VITE_API_KEY;

const requestUrls = {
  fetchTrending: `/trending/all/week?api_key=${api_key}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${api_key}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${api_key}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${api_key}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${api_key}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${api_key}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${api_key}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${api_key}&with_genres=99`,
  fetchPopular: `/movie/popular?api_key=${api_key}&language=en-US&page=1`,
  fetchUpcoming: `/movie/upcoming?api_key=${api_key}&language=en-US`,
  fetchTVshow: `discover/tv?api_key=${api_key}&language=en-US`,
};

export default requestUrls;
