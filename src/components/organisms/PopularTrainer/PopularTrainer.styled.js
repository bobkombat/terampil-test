import { mq } from 'assets/styles/theme';
import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  padding: 6em 0;
  background-color: #202020;
  padding-top: 40px;
`;

export const Title = styled.div`
  .title-trainer {
    font-family: Archivo;
    font-size: 25px;
    font-weight: bold;
    text-align: center;
    color: #fdfdfd;
    margin-bottom: 50px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
  padding: 0 100px;

  ${mq({
    padding: ['0 100px', null, '0 60px'],
  })}
`;

export const SliderPagination = styled.div`
  text-align: center;
  transition: 300ms opacity;
  transform: translate3d(0, 0, 0);
  z-index: 10;
  margin-top: 20px;

  span {
    margin: 0 5px;
  }

  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background-color: #c4c4c4;
    cursor: pointer;
  }

  .swiper-pagination-bullet-active {
    width: 30px;
    border-radius: 20px;
  }
`;
