// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { api } from 'service/api.service';

// // import PropTypes from 'prop-types';

// function MovieDetails({ id }) {
//   const [film, setFilm] = useState([]);

//   useEffect(() => {
//     api.fetchFilmsById(id).then(({ data }) => {
//       console.log(data.results);
//       setFilm(data.results);
//     });
//   }, [id]);

//   if (!film) {
//     return;
//   }

//   return (
//     <Link to={`/movies/${film.id}`} style={{ display: 'flex' }}>
//       <img
//         width="50"
//         src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
//         alt={film.title}
//       />
//       <p>{film.title}</p>
//     </Link>
//   );
// }

// // MovieDetails.propTypes = {};

// export default MovieDetails;
