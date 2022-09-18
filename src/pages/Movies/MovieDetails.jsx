import Container from 'components/Container/Container';
import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';

import { api } from 'service/api.service';

import { pathImageStabilization } from '../../helper/pathImageStabilization';

import {
  Box,
  LinkIcon,
  Icon,
  InfoBox,
  Tittle,
  Text,
  TittleText,
  MoreInfoBox,
  MoreInfoTittle,
  MoreButtonList,
  LinkButton,
} from './Movie.styles';

const MovieDetails = () => {
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
        <LinkIcon to={backLocation}>
          <Icon />
        </LinkIcon>
        <Box>
          <img
            width="300"
            src={pathImageStabilization(film.poster_path)}
            alt={film.title}
          />
          <InfoBox>
            <Tittle>{film.title}</Tittle>
            <Text>
              <TittleText>User Score: </TittleText> {film.popularity}
            </Text>
            <Text>
              <TittleText>Overview: </TittleText>
              {film.overview}
            </Text>
            <Text>
              <TittleText>Genres: </TittleText>
              {film.genres && film.genres.map(value => value.name).join(', ')}
            </Text>
          </InfoBox>
        </Box>
        <MoreInfoBox>
          <MoreInfoTittle>Additional information</MoreInfoTittle>
          <MoreButtonList>
            <li>
              <LinkButton to="cast">Cast</LinkButton>
            </li>
            <li>
              <LinkButton to="reviews">Reviews</LinkButton>
            </li>
          </MoreButtonList>
        </MoreInfoBox>
        <Outlet />
      </Container>
    </main>
  );
};

export default MovieDetails;
