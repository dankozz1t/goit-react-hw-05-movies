import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header/Header';
import Link from 'components/Link/Link';
import Container from '../Container/Container';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};
