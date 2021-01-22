import React from 'react';
import { Container, Title } from './styled.js';

import Accordion from 'components/atoms/Accordion/index.js';

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac molestie tempus, sit tristique interdum viverra massa urna. Nulla ut sed odio egestas massa elementum. Purus in aliquam felis erat congue magna dolor dui luctus. Quis leo vitae egestas duis non malesuada. Felis elementum dolor id dolor placerat lectus nulla.';

const data = [
  {
    question: 'Apa itu Terampil?',
    answer: lorem,
  },
  {
    question: 'Dimana saya bisa menonton',
    answer: lorem,
  },
  {
    question: 'Berapa harga berlangganan Terampil?',
    answer: lorem,
  },
  {
    question: 'Apakah saya bisa cancel',
    answer: lorem,
  },
];

const FAQ = () => {
  return (
    <Container>
      <Title>Frequently Ask Question</Title>
      <div className="accordion-container">
        {data.map((data, idx) => (
          <Accordion key={idx} data={data} />
        ))}
      </div>
    </Container>
  );
};

export default FAQ;
