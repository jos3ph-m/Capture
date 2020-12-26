import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { MovieState } from '../movieState';

const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  // useEffect - when we use filter on an array we are left with an array
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url)
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return(
    <>
    {movie && (
    <Details>
      <HeadLine>
        <h2>{movie.title}</h2>
        <img src={movie.mainImg} alt="movie"/>
      </HeadLine>
    </Details>
    )}
    </>
  );
}

const Details = styled.div`
  width: 100%;
`

const HeadLine = styled.div`

`

export default MovieDetail;