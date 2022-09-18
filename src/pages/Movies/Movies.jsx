import React, { useState } from 'react';

import { api } from 'service/api.service';

import MovieList from 'components/Movie/MovieList/MovieList';
import Searchbar from '../../components/Searchbar/Searchbar';
import Container from '../../components/Container/Container';

const Movies = () => {
  const [films, setFilms] = useState([]);

  // First create fetch films (params)
  //     api.fetchFilmsByName(query).then(({ data }) => {
  //       setFilms(data.results);

  const handleFormSubmit = query => {
    api.fetchFilmsByName(query).then(({ data }) => {
      setFilms(data.results);
    });
  };

  return (
    <main>
      <Container>
        <Searchbar onSubmit={handleFormSubmit} />

        {films.length > 0 && <MovieList films={films} />}
      </Container>
    </main>
  );
};

export default Movies;
