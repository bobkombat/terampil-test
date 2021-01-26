import React from 'react';
import { CardImage, TitleName, Title, BottomContainer } from './Card.styled';

function CardTrainer(props) {
  const { trainer } = props;
  return (
    <CardImage src={trainer.src}>
      <BottomContainer>
        <TitleName>{trainer.name}</TitleName>
        <Title>{trainer.title}</Title>
      </BottomContainer>
    </CardImage>
  );
}

CardTrainer.propTypes = {};

export default CardTrainer;
