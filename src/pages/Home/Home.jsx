import React, { useState, useEffect } from 'react';
import MovieList from '../../components/Movie/MovieList/MovieList';

import { api } from 'service/api.service';

export const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    api.fetchFilms().then(({ data }) => {
      setFilms(data.results);
    });
  }, []);

  return (
    <div>
      <h2>Trending today</h2>

      {films.length > 0 && <MovieList films={films} />}
    </div>
  );
};

export default Home;
