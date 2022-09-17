import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { api } from 'service/api.service';

export const Home = () => {
  const [films, setFilms] = useState([]);
  const location = useLocation().pathname;

  useEffect(() => {
    api.fetchFilms().then(({ data }) => {
      setFilms(data.results);
    });
  }, []);

  return (
    <div>
      <h2>Trending today</h2>

      <ul>
        {films.length > 0 &&
          films.map(({ id, title, poster_path }) => (
            <li key={title}>
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

export default Home;
