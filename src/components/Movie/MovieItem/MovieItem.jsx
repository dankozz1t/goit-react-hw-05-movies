import React from 'react';
import { useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';

import { pathImageStabilization } from 'helper/pathImageStabilization';

import { Item, Link } from '../Movie.styles';

const MovieItem = ({ id, poster_path, title }) => {
  const location = useLocation();

  return (
    <Item key={id}>
      <Link
        to={`/movies/${id}`}
        state={{ from: location }}
        style={{ display: 'flex' }}
      >
        <img
          width="250"
          src={pathImageStabilization(poster_path)}
          alt={title}
        />

        <p>{title}</p>
      </Link>
    </Item>
  );
};

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MovieItem;
