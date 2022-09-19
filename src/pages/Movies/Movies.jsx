import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { api } from 'service/api.service';

import MovieList from 'components/Movie/MovieList/MovieList';
import Searchbar from '../../components/Searchbar/Searchbar';
import Container from '../../components/Container/Container';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') ?? '');

  useEffect(() => {
    if (query) {
      try {
        api.fetchFilmsByName(query).then(({ data }) => {
          if (data.results.length === 0) {
            setSearchParams('');
          }

          setFilms(data.results);
        });
      } catch (error) {
        console.log(error);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const handleFormSubmit = query => {
    setQuery(query);
    setSearchParams(query !== '' ? { query } : {});
  };

  return (
    <main>
      <Container>
        <Searchbar onSubmit={handleFormSubmit} query={query} />

        {films.length > 0 && <MovieList films={films} />}
      </Container>
    </main>
  );
};

export default Movies;
