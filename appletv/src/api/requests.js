const API_KEY = 'c6b4175a32a7a522d8a8b4e4590a2577';

const requests = {
  fetchNowPlaying: `/movie/now_playing?api_key=${API_KEY}&language=ko-KR`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=ko-KR`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=ko-KR`,
  fetchActionMovies: `/discover/movie?with_genres=28&api_key=${API_KEY}&language=ko-KR`,
  fetchComedyMovies: `/discover/movie?with_genres=35&api_key=${API_KEY}&language=ko-KR`,
  fetchHorrorMovies: `/discover/movie?with_genres=27&api_key=${API_KEY}&language=ko-KR`,
  fetchRomanceMovies: `/discover/movie?with_genres=10749&api_key=${API_KEY}&language=ko-KR`,
  fetchDocumentaries: `/discover/movie?with_genres=99&api_key=${API_KEY}&language=ko-KR`
};

export default requests;
