import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title, CardContainer } from './styled';
import CardTestimoni from '../../molecule/MainTestimoni';

const dataTestimoni = [
  {
    src:
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    testimoni:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet corrupti voluptatum ullam alias natus culpa dignissimos dolores porro odio dolor facilis, illum recusandae facere praesentium architecto dicta. Eligendi, at nam!',
    profile: 'Aldam Trisena',
    job: 'bapak-bapak',
  },
];

function Testimoni(props) {
  return (
    <Container>
      <Title>Apa Kata Mereka?</Title>
      <CardContainer>
        {dataTestimoni.map((item, i) => (
          <CardTestimoni key={i} testimoni={item} />
        ))}
      </CardContainer>
    </Container>
  );
}

Testimoni.propTypes = {};

export default Testimoni;
