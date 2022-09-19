import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'd7ee9dda466bc4ced4432fb2e147fc44',
  },
});
const fetchFilms = async () => await instance.get(`/trending/movie/day`);

const fetchFilmsByName = async query =>
  await instance.get(`/search/movie`, { params: { query } });

const fetchFilmById = async id => await instance.get(`/movie/${id}`);

const fetchFilmCast = async id => await instance.get(`/movie/${id}/credits`);

const fetchFilmReviews = async id => await instance.get(`/movie/${id}/reviews`);

export const api = {
  fetchFilms,
  fetchFilmsByName,
  fetchFilmById,
  fetchFilmCast,
  fetchFilmReviews,
};
