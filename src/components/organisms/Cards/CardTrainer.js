import React from 'react';
import PropTypes from 'prop-types';
import { CardImage, Image, TitleName, Title } from './Card.styled';

function CardTrainer(props) {
  const { trainer } = props;
  return (
    <CardImage>
      <Image src={trainer.src} />
      <TitleName>{trainer.name}</TitleName>
      <Title>{trainer.title}</Title>
    </CardImage>
  );
}

CardTrainer.propTypes = {};

export default CardTrainer;
