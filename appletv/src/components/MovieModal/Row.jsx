import { useCallback, useEffect, useState } from 'react';
import './Row.css';
import axios from '../../api/axios'; // axios 인스턴스를 사용하는 것이 좋습니다

const Row = ({ title, id, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  const fetchMovieData = useCallback(async () => {
    const response = await axios.get(fetchUrl);
    setMovies(response.data.results);
  }, [fetchUrl]);

  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData]);

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='slider'>
        <div className='slider_arrow slider_arrow_left' onClick={() => {
          document.getElementById(id).scrollLeft -= window.innerWidth - 80;
        }}>
          <span className='arrow'>{"<"}</span>
        </div>
        <div id={id} className='row_posters'>
          {movies.map((movie) => (
            <img key={movie.id} className='row_poster' src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.name || movie.title}/>
          ))}
        </div>
        <div className='slider_arrow slider_arrow_right' onClick={() => {
          document.getElementById(id).scrollLeft += window.innerWidth - 80;
        }}>
          <span className='arrow'>{">"}</span>
        </div>
      </div>
    </div>
  );
};

export default Row;
