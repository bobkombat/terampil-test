import React from 'react';
import PropTypes from 'prop-types';
import { CardImage, Image, Title } from './Card.styled';

function CardTrainer(props) {
  const { trainer } = props;
  return (
    <CardImage>
      <Image src={trainer.src} />
      <Title>{trainer.name}</Title>
      <p>{trainer.title}</p>
    </CardImage>
  );
}

CardTrainer.propTypes = {};

export default CardTrainer;
