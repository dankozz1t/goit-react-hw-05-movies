import React, { useState, useEffect } from 'react';
import { api } from 'service/api.service';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [films, setFilms] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('name') ?? '';

  const location = useLocation();

  useEffect(() => {
    if (query) {
      api.fetchFilmByName(query).then(data => {
        setFilms(data);
      });
    }
  });

  const handleInputChange = e => {
    const name = e.target.value;

    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  const handleFromSubmit = e => {
    e.preventDefault();
    api.fetchFilmByName(query).then(data => {
      setFilms(data);
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

      <ul>
        {films.length > 0 &&
          films.map(({ id, title, poster_path }) => (
            <li key={id}>
              <Link
                to={`/movies/${id}`}
                state={{ from: location }}
                style={{ display: 'flex' }}
              >
                <img
                  width="50"
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt={title}
                />

                <p>{title}</p>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Movies;
