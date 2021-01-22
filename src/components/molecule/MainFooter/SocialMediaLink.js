import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title, Link } from './index.styled';

function SocialMediaLink(props) {
  return (
    <Container>
      <Title>Social Media</Title>
      <Link>Intagram</Link>
      <Link>Twitter</Link>
      <Link>Facebook</Link>
    </Container>
  );
}

SocialMediaLink.propTypes = {};

export default SocialMediaLink;
