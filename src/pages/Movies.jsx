import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { api } from 'service/api.service';

import MovieList from 'components/Movie/MovieList/MovieList';

export const Movies = () => {
  const [films, setFilms] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('name') ?? '';

  useEffect(() => {
    if (query) {
      api.fetchFilmsByName(query).then(({ data }) => {
        setFilms(data.results);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInputChange = e => {
    const name = e.target.value;

    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  const handleFromSubmit = e => {
    e.preventDefault();
    api.fetchFilmsByName(query).then(({ data }) => {
      setFilms(data.results);
    });
  };

  return (
    <div>
      <form onSubmit={handleFromSubmit}>
        <label>
          <input type="text" value={query} onChange={handleInputChange} />
        </label>
        <button type="submit">Search</button>
      </form>

      {films.length > 0 && <MovieList films={films} />}
    </div>
  );
};

export default Movies;
