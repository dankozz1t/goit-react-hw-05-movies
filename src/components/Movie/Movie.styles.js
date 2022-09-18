import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-decoration: none;
  padding: 5px;
  border-radius: 5px;
  /* border-radius: 4px; */
  color: black;
  font-weight: 500;

  &:hover {
    color: white;
    background-color: tomato;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
`;

export const Item = styled.li`
  flex-basis: calc((100% - 70px) / 5);
`;
