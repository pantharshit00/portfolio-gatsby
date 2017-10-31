import styled from 'styled-components';
import * as colors from '../../helpers/colors';
import { A } from './base.styles';
import { calculateRem } from '../../helpers/misc';

export const Navbar = styled.nav`
  display: grid;
  grid-template-columns: 30% auto 30%;
  padding: ${calculateRem(6)} 0 ${calculateRem(6)} 0;
  background-color: ${colors.$brand_color};
  position: fixed;
  width: 100%;
  top: 0;
`;

export const NavItem = styled.div`
  justify-self: center;
`;

export const NavList = styled.ul`
  margin: ${calculateRem(6)};
  list-style: none;
  display: flex;
  li {
    padding: ${calculateRem(6)};
  }
`;

export const Title = NavItem.extend`
  font-family: 'Quicksand', sans-serif;
  font-weight: bolder;
  font-size: ${calculateRem(42)};
  color: ${colors.$white};
`;

export const NavLink = A.extend`
  font-family: 'Quicksand', sans-serif;
  font-size: ${calculateRem(24)};
  font-weight: 300;
  color: ${colors.$white};
  margin-left: ${calculateRem(12)};
`;
