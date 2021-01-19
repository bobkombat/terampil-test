import React from 'react';
import PropTypes from 'prop-types';
import CardImage from './Card.styled';

function CardTrainer(props) {
  const { ...rest } = props;
  return <CardImage></CardImage>;
}

CardTrainer.propTypes = {};

export default CardTrainer;
