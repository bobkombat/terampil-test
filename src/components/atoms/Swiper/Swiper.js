import React from 'react';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardTrainer from 'components/organisms/Cards/CardTrainer';

SwiperCore.use([Pagination]);
const Slider = (props) => {
  const { trainerImage, ...rest } = props;
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      Pagination={{ clicktable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {trainerImage.map((trainer, index) => {
        return (
          <SwiperSlide>
            <CardTrainer trainer={trainer} key={index} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
