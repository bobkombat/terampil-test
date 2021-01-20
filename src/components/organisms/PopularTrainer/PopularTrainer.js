import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title, CardContainer } from './PopularTrainer.styled';

// aset
import ImageTrainer from '../../../assets/png/Rectangle 6.jpg';
// component
import CardTrainer from '../Cards/CardTrainer';

const trainerImage = [
  { name: 'Nama Trainer yaya', title: 'CEO STARUP', src: ImageTrainer },
  { name: 'Nama Trainer', title: 'CEO STARUP', src: ImageTrainer },
  { name: 'Nama Trainer', title: 'CEO STARUP', src: ImageTrainer },
  { name: 'Nama Trainer', title: 'CEO STARUP', src: ImageTrainer },
];

function PopularTrainer(props) {
  return (
    <Container>
      <Title>
        <h1 className="title-trainer">Classes Taught by Real Creators</h1>
      </Title>
      <CardContainer>
        {trainerImage.map((trainer, index) => {
          return <CardTrainer trainer={trainer} key={index} />;
        })}
      </CardContainer>
    </Container>
  );
}

PopularTrainer.propTypes = {};

export default PopularTrainer;
