import Container from 'components/Container/Container';
import React, { useState, useEffect } from 'react';
import { NavLink, useParams, useLocation, Outlet } from 'react-router-dom';

import { api } from 'service/api.service';

import { pathImageStabilization } from '../../helper/pathImageStabilization';

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
    <main>
      <Container>
        <NavLink to={backLocation}> c--- Go to back</NavLink>
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
              <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
          </ul>
          <Outlet />
        </div>
      </Container>
    </main>
  );
}

export default MovieDetails;
