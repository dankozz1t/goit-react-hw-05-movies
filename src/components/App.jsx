import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Layout = lazy(() => import('./Layout/Layout'));
const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/Movies/MovieDetails'));
const Cast = lazy(() => import('pages/Movies/Cast/Cast'));
const Reviews = lazy(() => import('pages/Movies/Reviews/Reviews'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />}></Route>
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
