import Container from 'components/Container/Container';
import React, { useState, useEffect, Suspense } from 'react';
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
    try {
      api.fetchFilmById(id).then(({ data }) => {
        setFilm(data);
      });
    } catch (error) {
      console.log(error);
    }
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
            <Tittle>{film.title ? film.title : 'No Info'}</Tittle>
            <Text>
              <TittleText>User Score: </TittleText>{' '}
              {film.vote_average ? film.vote_average * 10 : 0}%
            </Text>
            <Text>
              <TittleText>Overview: </TittleText>
              {film.overview ? film.overview : 'No Info'}
            </Text>
            <Text>
              <TittleText>Genres: </TittleText>
              {film.genres.length > 0
                ? film.genres.map(value => value.name).join(', ')
                : 'No Info'}
            </Text>
          </InfoBox>
        </Box>
        <MoreInfoBox>
          <MoreInfoTittle>Additional information</MoreInfoTittle>
          <MoreButtonList>
            <li>
              <LinkButton to="cast" state={{ from: backLocation }}>
                Cast
              </LinkButton>
            </li>
            <li>
              <LinkButton to="reviews" state={{ from: backLocation }}>
                Reviews
              </LinkButton>
            </li>
          </MoreButtonList>
        </MoreInfoBox>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </main>
  );
};

export default MovieDetails;
