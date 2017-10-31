import styled from 'styled-components';
import { $white } from '../../helpers/colors';
import { calculateRem } from '../../helpers/misc';
import heroImg from '../../assets/hero.jpeg';

export const Hero = styled.div`
  background: linear-gradient(rgba(37, 166, 91, 0.65), rgba(37, 166, 91, 0.65)),
    url(${heroImg}) no-repeat;
  height: 100vh;
  background-attachment: fixed;
  background-size: cover;
  display: grid;
  grid-template-columns: 40% 35%;
  justify-content: center;
  align-items: center;
`;

export const MyImage = styled.img`
  height: ${calculateRem(385)};
  width: ${calculateRem(364)};
  border-radius: ${calculateRem(105)};
`;

export const Intro = styled.div`
  color: ${$white};
`;
