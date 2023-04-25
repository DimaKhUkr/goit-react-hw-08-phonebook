import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthNavStyled = styled(NavLink)`
  text-decoration: none;
  font-size: 22px;
  font-weight: 700;
  color: black;
  border-bottom: 2px solid black;
  margin-left: 20px;
  margin-right: 20px;

  &:hover {
    color: #66d0d0;
    border-bottom: 2px solid #66d0d0;
  }

  &.active {
    color: white;
    border-bottom: 2px solid white;

    &:hover {
      color: #66d0d0;
      border-bottom: 2px solid #66d0d0;
    }
  }
`;
