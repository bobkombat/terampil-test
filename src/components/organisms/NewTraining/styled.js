import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  background-color: #202020;
  box-sizing: border-box;
  padding: 70px 0;
  position: relative;

  .button-slider {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 95%;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .slider {
    position: relative;
  }
  @media screen and ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    padding: 30px 0;
    overflow: scroll;
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 100px;
  @media screen and ${(props) => props.theme.breakpoints.sm} {
    padding: 0;
  }
`;

export const Title = styled.h6`
  font-family: Archivo;
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #fdfdfd;
  margin: 0 0 50px 0;
`;

export const SliderPagination = styled.div`
  position: relative;
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
