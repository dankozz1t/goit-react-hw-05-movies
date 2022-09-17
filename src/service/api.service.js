import axios from 'axios';

const API_KEY = 'd7ee9dda466bc4ced4432fb2e147fc44';

const BASE_URL = `https://api.themoviedb.org/3`;

export const fetchFilms = async () => {
  try {
    const url = `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`;
    const data = await axios.get(url);

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const api = {
  fetchFilms,
};
