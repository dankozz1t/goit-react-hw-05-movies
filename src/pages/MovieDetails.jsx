import { pathImageStabilization } from 'helper/pathImageStabilization';
import React, { useState, useEffect } from 'react';
import { Link, useParams, useLocation, Outlet } from 'react-router-dom';
import { api } from 'service/api.service';

// import PropTypes from 'prop-types';

function MovieDetails() {
  const [film, setFilm] = useState({});

  const { id } = useParams();

  const location = useLocation();
  const backLocation = location.state?.from ?? '/';

  useEffect(() => {
    api.fetchFilmById(id).then(({ data }) => {
      setFilm(data);
    });
  }, [id]);

  if (Object.keys(film).length === 0) {
    return;
  }
  return (
    <div style={{ display: 'flex' }}>
      <Link to={backLocation}> c--- Go to back</Link>
      <img
        width="250"
        src={pathImageStabilization(film.poster_path)}
        alt={film.title}
      />

      <div>
        <h2>{film.title}</h2>
        <p>User Score: {film.popularity}</p>
        <p>
          <b>Overview </b>
          {film.overview}
        </p>
        <p>
          <b>Genres </b>
          {film.genres && film.genres.map(value => value.name).join(', ')}
        </p>

        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
}

// MovieDetails.propTypes = {};

export default MovieDetails;
