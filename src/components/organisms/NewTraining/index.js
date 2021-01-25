import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title, ContainerCard } from './styled';
import CardNewTraining from '../Cards/Card NewTraining';
import Thumnail1 from '../../../assets/png/RectangleVideo1.png';
import Thumnail2 from '../../../assets/png/RectangleVideo2.png';
import Slider from '../../atoms/Slider/index';
import { SwiperSlide } from 'swiper/react';
import { SliderPagination } from '../PopularTrainer/PopularTrainer.styled';

const dataTraining = [
  {
    src: 'https://archive.org/download/Popeye_forPresident/Popeye_forPresident_512kb.mp4',
    title: 'Machine Learning A-Z™: Hands-On Python & R In Data Science',
    profile: 'aldam',
    thumbnail: Thumnail1,
  },
  {
    src: 'https://archive.org/download/Popeye_forPresident/Popeye_forPresident_512kb.mp4',
    title: 'Machine Learning A-Z™: Hands-On Python & R In Data Science',
    profile: 'Aldam Trisena',
    thumbnail: Thumnail2,
  },
  {
    src: 'https://archive.org/download/Popeye_forPresident/Popeye_forPresident_512kb.mp4',
    title: 'The Complete Foundation Stock Trading Course',
    profile: 'aldam',
    thumbnail: Thumnail1,
  },
  {
    src: 'https://archive.org/download/Popeye_forPresident/Popeye_forPresident_512kb.mp4',
    title: 'Machine Learning A-Z™: Hands-On Python & R In Data Science',
    profile: 'aldam',
  },
];

function NewTraining(props) {
  return (
    <Container>
      <Title>Kelas Baru Tiap Minggu </Title>
      <ContainerCard>
        <Slider next="next-newtraining" prev="prev-training" pagination="new-trainig" count={3}>
          {dataTraining.map((item, i) => {
            return (
              <SwiperSlide>
                <CardNewTraining newTraining={item} key={i} />
              </SwiperSlide>
            );
          })}
        </Slider>
      </ContainerCard>
    </Container>
  );
}

NewTraining.propTypes = {};

export default NewTraining;
