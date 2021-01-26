import React from 'react';
import PropTypes from 'prop-types';
import { Container, VideoPlayer, Title, ProfileName } from './styled';
import Slider from '../../../atoms/Slider/index';

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

CardNewTraining.propTypes = {};

export default CardNewTraining;
