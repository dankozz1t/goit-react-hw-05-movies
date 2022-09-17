import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from 'service/api.service';
// import PropTypes from 'prop-types';

function Cast() {
  const [cast, setCast] = useState({});

  const { id } = useParams();

  useEffect(() => {
    api.fetchFilmCast(id).then(data => {
      setCast(data);
    });
  }, [id]);

  if (Object.keys(cast).length === 0) {
    return <p>We don't have any information about cast for this movie :(</p>;
  }
  return (
    <div style={{ display: 'flex' }}>
      <ul>
        {cast.map(person => (
          <li key={person.id}>
            <img
              width="50"
              src={
                person.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
                  : 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg'
              }
              alt={person.original_name}
            />
            <p>{person.original_name}</p>
            <p>
              <b>Character: {person.character}</b>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Cast.propTypes = {};

export default Cast;
