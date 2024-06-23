import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from '../api/axios';
import requests from '../api/requests';

const Banner = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(requests.fetchNowPlaying);
        console.log('fetchNowPlaying response:', response.data); // 데이터 확인
        const movieId = response.data.results[
          Math.floor(Math.random() * response.data.results.length)
        ].id;

        const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
          params: { append_to_response: 'videos' },
        });
        console.log('movieDetail:', movieDetail); // 데이터 확인
        setMovie(movieDetail);
      } catch (error) {
        console.error('Failed to fetch movie data:', error);
      }
    };

    fetchData();
  }, []);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <Header
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
      }}
    >
      <Contents>
        <Title>{movie.title || movie.name || movie.original_name}</Title>
        <Description>{movie.overview}</Description>
      </Contents>
      <FadeBottom />
    </Header>
  );
};

const Header = styled.header`
  color: white;
  object-fit: contain;
  height: 448px;
`;

const Contents = styled.div`
  margin-left: 30px;
  padding-top: 140px;
  height: 190px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.3rem;
`;

const Description = styled.h1`
  width: 45rem;
  line-height: 1.3;
  padding-top: 1rem;
  font-size: 1rem;
  max-width: 360px;
  height: 80px;
`;

const FadeBottom = styled.div`
  height: 7.4rem;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
`;

export default Banner;
