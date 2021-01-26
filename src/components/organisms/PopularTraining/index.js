import React, { useState } from 'react';
import {
  Container,
  CardContainer,
  CategoryText,
  CategoryContainer,
} from './PopularTraining.styled';
import Slider from '../../atoms/Slider';
import training1 from '../../../assets/png/training/training-1.png';
import training2 from '../../../assets/png/training/training-2.png';
import training3 from '../../../assets/png/training/training-3.png';
import training4 from '../../../assets/png/training/training-4.png';
import { CardTraining } from '../Cards/CardTraining';
import { SwiperSlide } from 'swiper/react';
import { SliderControlPrimary } from '../../atoms/Slider/Slider.styled';
import { SliderPagination } from '../PopularTrainer/PopularTrainer.styled';
import {checkMobile} from "../../../utils/checkMobile";

const trainings = [
  {
    title: 'Silence & Curiosity: A Guide to Self-Reflection and Self-Discov..',
    trainer: {
      name: 'Suci Wijayanti, CBHA, BBT, ACC, Amd. Ing',
    },
    cover: training3,
    review: 'UGM'
  },
  {
    title: 'Silence & Curiosity: A Guide to Self-Reflection and Self-Discov..',
    trainer: {
      name: 'Suci Wijayanti, CBHA, BBT, ACC, Amd. Ing',
    },
    cover: training2,
  },
  {
    title: 'Silence & Curiosity: A Guide to Self-Reflection and Self-Discov..',
    trainer: {
      name: 'Suci Wijayanti, CBHA, BBT, ACC, Amd. Ing',
    },
    cover: training3,
    collaboration: 'Telkom',
  },
  {
    title: 'Silence & Curiosity: A Guide to Self-Reflection and Self-Discov..',
    trainer: {
      name: 'Suci Wijayanti, CBHA, BBT, ACC, Amd. Ing',
    },
    cover: training4,
  },
  {
    title: 'Silence & Curiosity: A Guide to Self-Reflection and Self-Discov..',
    trainer: {
      name: 'Suci Wijayanti, CBHA, BBT, ACC, Amd. Ing',
    },
    cover: training4,
  },
  {
    title: 'Silence & Curiosity: A Guide to Self-Reflection and Self-Discov..',
    trainer: {
      name: 'Suci Wijayanti, CBHA, BBT, ACC, Amd. Ing',
    },
    cover: training3,
    collaboration: 'Telkom',
  },
  {
    title: 'Silence & Curiosity: A Guide to Self-Reflection and Self-Discov..',
    trainer: {
      name: 'Suci Wijayanti, CBHA, BBT, ACC, Amd. Ing',
    },
    cover: training2,
  },
  {
    title: 'Silence & Curiosity: A Guide to Self-Reflection and Self-Discov..',
    trainer: {
      name: 'Suci Wijayanti, CBHA, BBT, ACC, Amd. Ing',
    },
    cover: training1,
  },
  {
    title: 'Silence & Curiosity: A Guide to Self-Reflection and Self-Discov..',
    trainer: {
      name: 'Suci Wijayanti, CBHA, BBT, ACC, Amd. Ing',
    },
    cover: training4,
  },
  {
    title: 'Silence & Curiosity: A Guide to Self-Reflection and Self-Discov..',
    trainer: {
      name: 'Suci Wijayanti, CBHA, BBT, ACC, Amd. Ing',
    },
    cover: training3,
  },
  {
    title: 'Silence & Curiosity: A Guide to Self-Reflection and Self-Discov..',
    trainer: {
      name: 'Suci Wijayanti, CBHA, BBT, ACC, Amd. Ing',
    },
    cover: training2,
    review: 'UGM',
  },
  {
    title: 'Silence & Curiosity: A Guide to Self-Reflection and Self-Discov..',
    trainer: {
      name: 'Suci Wijayanti, CBHA, BBT, ACC, Amd. Ing',
    },
    cover: training1,
  },
];

const categories = [
  'Paling Popular',
  'Komunikasi',
  'Marketing',
  'Kepemimpinan',
  'Kategori1',
  'Kategori2',
  'Kategori3',
  'Kategori4',
  'Kategori5',
  'Kategori6',
  'Kategori7',
  'Kategori8',
  'Kategori9',
  'Kategori10',
  'Kategori11',
  'Kategori12',
  'Kategori13',
];


const PopularTraining = () => {
  const [selectedCategory, setSelectedCategory] = useState('Paling Popular');

  const renderComponents = () => {
    if (checkMobile()) {
      return (
          <>
            <div className='overlay'>
              {categories.map((category, index) => {
                return (
                    <CategoryContainer onClick={() => setSelectedCategory(category)}>
                      <CategoryText selected={selectedCategory === category}>{category}</CategoryText>
                    </CategoryContainer>
                );
              })}
            </div>

            <div className="overlay">
              {trainings.map((training, index) => {
                return (
                    <CardTraining training={training} />
                );
              })}
            </div>
          </>
      )
    }
    return (
        <>
          {/*Categories*/}
          <div className="slider">
            <CardContainer>
              <Slider next="next-category" prev="prev-category" count={7}>
                {categories.map((category, index) => {
                  return (
                      <SwiperSlide>
                        <CategoryContainer onClick={() => setSelectedCategory(category)}>
                          <CategoryText selected={selectedCategory === category}>{category}</CategoryText>
                        </CategoryContainer>
                      </SwiperSlide>
                  );
                })}
              </Slider>
            </CardContainer>
            <div className="button-slider">
              <SliderControlPrimary className="prev-primary" id="prev-category">
                <svg width="10" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M8.5 0.249998C8.79206 0.249428 9.07511 0.351145 9.3 0.537497C9.42657 0.642433 9.5312 0.771311 9.60789 0.916744C9.68458 1.06218 9.73182 1.22131 9.74692 1.38503C9.76201 1.54875 9.74466 1.71384 9.69585 1.87085C9.64705 2.02785 9.56775 2.17369 9.4625 2.3L3.8625 9L9.2625 15.7125C9.36633 15.8404 9.44387 15.9875 9.49066 16.1454C9.53745 16.3033 9.55257 16.4689 9.53514 16.6327C9.51772 16.7965 9.4681 16.9552 9.38913 17.0998C9.31016 17.2443 9.20341 17.3718 9.075 17.475C8.94566 17.5888 8.79421 17.6746 8.63013 17.7271C8.46605 17.7796 8.2929 17.7976 8.12153 17.78C7.95016 17.7624 7.78429 17.7096 7.63431 17.6248C7.48433 17.5401 7.35349 17.4252 7.25 17.2875L1.2125 9.7875C1.02864 9.56383 0.928137 9.28328 0.928137 8.99375C0.928137 8.70422 1.02864 8.42366 1.2125 8.2L7.4625 0.699999C7.58789 0.548727 7.74719 0.429146 7.92745 0.35096C8.10771 0.272776 8.30386 0.238184 8.5 0.249998Z"
                      viewBox="0 0 10 18"
                      fill="white"
                      fill-opacity="0.7"
                  />
                </svg>
              </SliderControlPrimary>

              <SliderControlPrimary className="next-primary" id="next-category">
                <svg
                    width="10"
                    height="18"
                    viewBox="0 0 10 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      d="M1.5 17.75C1.20794 17.7506 0.924893 17.6489 0.700002 17.4625C0.573429 17.3576 0.468802 17.2287 0.392112 17.0833C0.315422 16.9378 0.268177 16.7787 0.253082 16.615C0.237987 16.4512 0.25534 16.2862 0.304145 16.1292C0.352951 15.9721 0.43225 15.8263 0.537502 15.7L6.1375 9L0.737503 2.2875C0.633671 2.15964 0.556131 2.01252 0.509341 1.8546C0.462552 1.69667 0.447435 1.53106 0.464859 1.36727C0.482283 1.20349 0.531904 1.04476 0.610871 0.900216C0.689838 0.75567 0.796595 0.628155 0.925003 0.525002C1.05434 0.411206 1.20579 0.325372 1.36987 0.272886C1.53395 0.220399 1.7071 0.202395 1.87847 0.220001C2.04984 0.237607 2.21571 0.290444 2.36569 0.375196C2.51567 0.459949 2.64651 0.574786 2.75 0.712502L8.7875 8.2125C8.97136 8.43617 9.07186 8.71672 9.07186 9.00625C9.07186 9.29578 8.97136 9.57634 8.7875 9.8L2.5375 17.3C2.41211 17.4513 2.25281 17.5709 2.07255 17.649C1.89229 17.7272 1.69614 17.7618 1.5 17.75Z"
                      fill="white"
                      fill-opacity="0.7"
                  />
                </svg>
              </SliderControlPrimary>
            </div>
          </div>

          {/*Training*/}
          <div className="slider">
            <div className="button-slider">
              <SliderControlPrimary className="prev-primary" id="prev-training">
                <svg width="10" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M8.5 0.249998C8.79206 0.249428 9.07511 0.351145 9.3 0.537497C9.42657 0.642433 9.5312 0.771311 9.60789 0.916744C9.68458 1.06218 9.73182 1.22131 9.74692 1.38503C9.76201 1.54875 9.74466 1.71384 9.69585 1.87085C9.64705 2.02785 9.56775 2.17369 9.4625 2.3L3.8625 9L9.2625 15.7125C9.36633 15.8404 9.44387 15.9875 9.49066 16.1454C9.53745 16.3033 9.55257 16.4689 9.53514 16.6327C9.51772 16.7965 9.4681 16.9552 9.38913 17.0998C9.31016 17.2443 9.20341 17.3718 9.075 17.475C8.94566 17.5888 8.79421 17.6746 8.63013 17.7271C8.46605 17.7796 8.2929 17.7976 8.12153 17.78C7.95016 17.7624 7.78429 17.7096 7.63431 17.6248C7.48433 17.5401 7.35349 17.4252 7.25 17.2875L1.2125 9.7875C1.02864 9.56383 0.928137 9.28328 0.928137 8.99375C0.928137 8.70422 1.02864 8.42366 1.2125 8.2L7.4625 0.699999C7.58789 0.548727 7.74719 0.429146 7.92745 0.35096C8.10771 0.272776 8.30386 0.238184 8.5 0.249998Z"
                      viewBox="0 0 10 18"
                      fill="white"
                      fill-opacity="0.7"
                  />
                </svg>
              </SliderControlPrimary>

              <SliderControlPrimary className="next-primary" id="next-training">
                <svg
                    width="10"
                    height="18"
                    viewBox="0 0 10 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      d="M1.5 17.75C1.20794 17.7506 0.924893 17.6489 0.700002 17.4625C0.573429 17.3576 0.468802 17.2287 0.392112 17.0833C0.315422 16.9378 0.268177 16.7787 0.253082 16.615C0.237987 16.4512 0.25534 16.2862 0.304145 16.1292C0.352951 15.9721 0.43225 15.8263 0.537502 15.7L6.1375 9L0.737503 2.2875C0.633671 2.15964 0.556131 2.01252 0.509341 1.8546C0.462552 1.69667 0.447435 1.53106 0.464859 1.36727C0.482283 1.20349 0.531904 1.04476 0.610871 0.900216C0.689838 0.75567 0.796595 0.628155 0.925003 0.525002C1.05434 0.411206 1.20579 0.325372 1.36987 0.272886C1.53395 0.220399 1.7071 0.202395 1.87847 0.220001C2.04984 0.237607 2.21571 0.290444 2.36569 0.375196C2.51567 0.459949 2.64651 0.574786 2.75 0.712502L8.7875 8.2125C8.97136 8.43617 9.07186 8.71672 9.07186 9.00625C9.07186 9.29578 8.97136 9.57634 8.7875 9.8L2.5375 17.3C2.41211 17.4513 2.25281 17.5709 2.07255 17.649C1.89229 17.7272 1.69614 17.7618 1.5 17.75Z"
                      fill="white"
                      fill-opacity="0.7"
                  />
                </svg>
              </SliderControlPrimary>
            </div>

            <CardContainer>
              <Slider next="next-training" prev="prev-training" pagination="training-popular">
                {trainings.map((training, index) => {
                  return (
                      <SwiperSlide>
                        <CardTraining training={training} />
                      </SwiperSlide>
                  );
                })}
              </Slider>
            </CardContainer>
          </div>

          <SliderPagination id="training-popular" />
        </>
    )
  }

  return (
    <Container>
      <h1>Ketegori Kelas</h1>
      {renderComponents()}
    </Container>
  );
};

export default PopularTraining;
