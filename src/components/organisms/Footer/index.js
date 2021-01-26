import React from 'react';
import { Container } from './Footer.styled';
import { About, MobileLink, PerusahaanLink, SocialMedia } from '../../molecule/MainFooter/';

function Footer() {
  return (
    <Container>
      <About />
      <PerusahaanLink />
      <SocialMedia />
      <MobileLink />
    </Container>
  );
}

export default Footer;
