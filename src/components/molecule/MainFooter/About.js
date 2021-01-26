import React from 'react';
import { Container, Link, Address } from './index.styled';
import LogoIcon from '../../../assets/png/LogoTerampil.png';

function About() {
  return (
    <Container>
      <div style={{ textAlign: 'left' }}>
        <img src={LogoIcon} alt="logo" />
      </div>
      <Address>Warung Buncit, Jakarta Selatan</Address>
      <Link href="mailto: halloterampil@terampil.com" target="blank">
        halloterampil@terampil.com
      </Link>
      <Link href="Tel: 021 3456789">021 3456789</Link>
    </Container>
  );
}
export default About;
