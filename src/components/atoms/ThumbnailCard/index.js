import React from 'react';
import { Container } from './styled';

const ThumbnailCard = ({ src }) => {
  return (
    <Container src={src}>
      <div className="main-thumb"></div>
      <div className="bg-thumb"></div>
    </Container>
  );
};

export default ThumbnailCard;
