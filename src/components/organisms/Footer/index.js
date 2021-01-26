import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './Footer.styled';
import { About, MobileLink, PerusahaanLink, SocialMedia } from '../../molecule/MainFooter/';

function Footer(props) {
  return (
    <Container>
      <About />
      <PerusahaanLink />
      <SocialMedia />
      <MobileLink />
    </Container>
  );
}

Footer.propTypes = {};

export default Footer;
