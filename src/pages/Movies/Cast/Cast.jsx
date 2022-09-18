import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { api } from 'service/api.service';

import { pathImageStabilization } from '../../../helper/pathImageStabilization';

import { List, Item, Info } from './Cast.styles';

function Cast() {
  const [cast, setCast] = useState({});

  const { id } = useParams();

  useEffect(() => {
    api.fetchFilmCast(id).then(({ data }) => {
      setCast(data.cast.splice(0, 20));
    });
  }, [id]);

  if (Object.keys(cast).length === 0) {
    return <p>We don't have any information about cast for this movie :(</p>;
  }
  return (
    <>
      <List>
        {cast.map(person => (
          <Item key={person.id}>
            <img
              width="100"
              src={pathImageStabilization(person.profile_path)}
              alt={person.original_name}
            />
            <Info>
              <h3>{person.original_name}</h3>
              <p>
                <b>Character: </b> {person.character}
              </p>
            </Info>
          </Item>
        ))}
      </List>
    </>
  );
}

export default Cast;
