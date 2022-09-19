import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'd7ee9dda466bc4ced4432fb2e147fc44',
  },
});
const fetchFilms = () => instance.get(`/trending/movie/day`);

const fetchFilmsByName = query =>
  instance.get(`/search/movie`, { params: { query } });

const fetchFilmById = id => instance.get(`/movie/${id}`);

const fetchFilmCast = id => instance.get(`/movie/${id}/credits`);

const fetchFilmReviews = id => instance.get(`/movie/${id}/reviews`);

export const api = {
  fetchFilms,
  fetchFilmsByName,
  fetchFilmById,
  fetchFilmCast,
  fetchFilmReviews,
};
