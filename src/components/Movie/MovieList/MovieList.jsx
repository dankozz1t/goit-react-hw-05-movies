import React from 'react';
import MovieItem from '../MovieItem/MovieItem';

import { List } from '../Movie.styles';

export const MovieList = ({ films }) => {
  return (
    <List>
      {films.map(({ id, title, poster_path }) => (
        <MovieItem key={id} id={id} title={title} poster_path={poster_path} />
      ))}
    </List>
  );
};

export default MovieList;
