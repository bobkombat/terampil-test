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
  const {
    slidePerGroup,
    trainerImage,
    component,
    children,
    prev,
    next,
    count = 4,
    pagination,
    mobile = false,
    ...rest
  } = props;
  console.log(mobile, 'oawenfoiwefnoin');
  return (
    <StyledSlider>
      <Swiper
        navigation={{ nextEl: `#${next}`, prevEl: `#${prev}` }}
        slidesPerView={count}
        pagination={{
          clickable: true,
          el: `#${pagination}`,
        }}
        style={{ padding: '0 0px' }}
        slidesPerGroup={count}
        draggable={false}
        speed={700}
        allowTouchMove={true}
      >
        {children}
        <div slot="container-start"></div>
        <div slot="container-end"></div>
        <div slot="wrapper-start"></div>
        <div slot="wrapper-end"></div>
      </Swiper>
    </StyledSlider>
  );
};

export default Slider;
