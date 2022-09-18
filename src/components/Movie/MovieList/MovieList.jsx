import React from 'react';
import PropTypes from 'prop-types';

import MovieItem from '../MovieItem/MovieItem';

import { List } from '../Movie.styles';

const MovieList = ({ films }) => {
  return (
    <List>
      {films.map(({ id, title, poster_path }) => (
        <MovieItem key={id} id={id} title={title} poster_path={poster_path} />
      ))}
    </List>
  );
};

MovieList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ).isRequired,
};

export default MovieList;
