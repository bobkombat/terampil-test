import React from 'react';
import { Container, VideoPlayer, Title, ProfileName } from './styled';

function CardNewTraining(props) {
  const { newTraining } = props;
  return (
    <Container>
      <VideoPlayer controls poster={newTraining.thumbnail} src={newTraining.src} />
      <Title>{newTraining.title}</Title>
      <ProfileName>{newTraining.profile}</ProfileName>
    </Container>
  );
}

export default CardNewTraining;
