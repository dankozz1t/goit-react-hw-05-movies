import React, { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

import Header from 'components/Header/Header';
import Container from '../Container/Container';

import styled from 'styled-components';

const Navigation = styled.nav`
  display: flex;
  gap: 10px;
  padding: 10px;
`;

const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: tomato;
  }
`;

const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
          </Navigation>
        </Container>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
