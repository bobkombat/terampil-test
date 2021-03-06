import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title, Link } from './index.styled';

function PerusahaanLink(props) {
  return (
    <Container>
      <Title>Perusahaan</Title>
      <Link>Tentang Kami</Link>
      <Link>Karir</Link>
      <Link>Syarat dan Ketentuan</Link>
    </Container>
  );
}

PerusahaanLink.propTypes = {};

export default PerusahaanLink;
