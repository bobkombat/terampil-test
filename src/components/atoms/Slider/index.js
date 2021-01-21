import React from 'react';
import SwiperCore, { Navigation, Pagination, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import StyledSlider from './Slider.styled';
import CardTrainer from 'components/organisms/Cards/CardTrainer';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-fade/effect-fade.scss';

// install Swiper components
SwiperCore.use([Navigation, Pagination, EffectFade]);

const Slider = (props) => {
  const { trainerImage, ...rest } = props;
  return (
    <StyledSlider>
      <Swiper
        navigation={{ nextEl: '.next-primary', prevEl: '.prev-primary' }}
        slidesPerView={4}
        pagination={{
          clickable: true,
          el: '.slider-pagination',
        }}
        style={{ padding: '0 0px' }}
        slidesPerGroup={4}
        draggable={false}
        speed={700}
        allowTouchMove={false}
      >
        {trainerImage.map((trainer, index) => {
          return (
            <SwiperSlide>
              <CardTrainer trainer={trainer} key={index} />
            </SwiperSlide>
          );
        })}
        <div slot="container-start"></div>
        <div slot="container-end"></div>
        <div slot="wrapper-start"></div>
        <div slot="wrapper-end"></div>
      </Swiper>
    </StyledSlider>
  );
};

export default Slider;
