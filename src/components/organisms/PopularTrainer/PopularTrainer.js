import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container, Title, CardContainer } from './PopularTrainer.styled';

// aset
import ImageTrainer from '../../../assets/png/Rectangle 6.jpg';
import ImageTrainer2 from '../../../assets/png/Rectangle 4.png';
// component
import CardTrainer from '../Cards/CardTrainer';
import Slider from 'components/atoms/Swiper/Swiper';
import { SwiperSlide } from 'swiper/react';
import Carousel, { consts } from 'react-elastic-carousel';

const DotPagination = styled.button`
  padding: 3px;
  width: 3px;
  height: 10px;
  margin: 20px 5px;
  background-color: #c4c4c4;
  color: black;
  border-radius: 50%;
`;

const trainerImage = [
  { name: 'Nama Trainer yaya', title: 'Ceo STARUP', src: ImageTrainer },
  { name: 'Nama Trainer', title: 'CEO STARUP', src: ImageTrainer2 },
  { name: 'Nama Trainer', title: 'CEO STARUP', src: ImageTrainer },
  { name: 'Nama Trainer', title: 'CEO STARUP', src: ImageTrainer },
  { name: 'Nama Trainer', title: 'CEO STARUP', src: ImageTrainer },
  { name: 'Nama Trainer', title: 'CEO STARUP', src: ImageTrainer },
  { name: 'Nama Trainer', title: 'CEO STARUP', src: ImageTrainer2 },
  { name: 'Nama Trainer', title: 'CEO STARUP', src: ImageTrainer },
  { name: 'Nama Trainer', title: 'CEO STARUP', src: ImageTrainer },
  { name: 'Nama Trainer', title: 'CEO STARUP', src: ImageTrainer },
  { name: 'Nama Trainer', title: 'CEO STARUP', src: ImageTrainer },
];

function PopularTrainer(props) {
  const numberToArray = (n) => [...Array(n).keys()];
  const numbPage = 10;
  const pages = numberToArray(numbPage);
  console.log(pages);
  const reanderPagination = () => {
    return (
      <div style={{ display: 'flex' }}>
        {pages.map((page, idx) => (
          <DotPagination key={idx} onClick={page} />
        ))}
      </div>
    );
  };
  return (
    <Container>
      <Title>
        <h1 className="title-trainer">Classes Taught by Real Creators</h1>
      </Title>
      <CardContainer>
        <Carousel
          //   outerSpacing={10}
          //   itemPosition={consts.}
          itemPadding={[10, 50]}
          itemsToShow={4}
          itemsToScroll={4}
          renderPagination={reanderPagination}
        >
          {trainerImage.map((trainer, index) => {
            return <CardTrainer trainer={trainer} key={index} />;
          })}
        </Carousel>
      </CardContainer>
    </Container>
  );
}

PopularTrainer.propTypes = {};

export default PopularTrainer;
