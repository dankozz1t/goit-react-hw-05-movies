import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const MainHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
    gap: 10px;
  }
`;

const Header = ({ children }) => {
  return <MainHeader>{children}</MainHeader>;
};

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Header;
