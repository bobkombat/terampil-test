import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  background-color: #202020;
  padding: 40px 0;

  .button-slider {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 95%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .slider {
    position: relative;
    margin-bottom: 8px;
  }
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

  @media screen and ${(props) => props.theme.breakpoints.lg} {
    padding: 0 60px;
  }

  @media screen and ${(props) => props.theme.breakpoints.sm} {
    padding: 0 5px;
  }
`;

export const SliderPagination = styled.div`
  position: relative;
  text-align: center;
  transition: all 300ms ease;
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

  @media screen and ${(props) => props.theme.breakpoints.sm} {
    margin-top: 0px;

    .swiper-pagination-bullet {
      width: 7px;
      height: 7px;
    }

    .swiper-pagination-bullet-active {
      width: 20px;
    }
  }
`;
