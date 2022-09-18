import React, { useState, useEffect } from 'react';
import MovieList from '../../components/Movie/MovieList/MovieList';

import { api } from 'service/api.service';
import Container from '../../components/Container/Container';
import { Tittle } from './Home.styles';

const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    api.fetchFilms().then(({ data }) => {
      setFilms(data.results);
    });
  }, []);

  return (
    <main>
      <Container>
        <Tittle>Trending today</Tittle>

        {films.length > 0 && <MovieList films={films} />}
      </Container>
    </main>
  );
};

export default Home;
