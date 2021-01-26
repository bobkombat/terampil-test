import styled from 'styled-components';

const StyledSlider = styled.section`
  width: 100%;

  .swiper-slide {
    display: flex;
    justify-content: center;
  }
`;

export const SliderControlPrimary = styled.div`
  &.next-primary {
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 1%;
    right: 40px;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: #626262;
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.35);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.35);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.35);
    cursor: pointer;
    transition: all 0.1s ease-out;
  }

  &.prev-primary {
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 1%;
    left: 40px;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: #626262;
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.35);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.35);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.35);
    cursor: pointer;
    transition: all 0.1s ease-out;
  }

  &.next-primary:hover {
    background-color: #424242;
  }

  &.prev-primary:hover {
    background-color: #424242;
  }

  &.swiper-button-disabled {
    visibility: hidden;
  }

  @media screen and ${(props) => props.theme.breakpoints.lg} {
    &.next-primary {
      width: 30px;
      height: 30px;
      right: 25px;
      bottom: 7%;
    }

    &.prev-primary {
      width: 30px;
      height: 30px;
      left: 25px;
      bottom: 7%;
    }
  }

  @media screen and ${(props) => props.theme.breakpoints.sm} {
    &.next-primary {
      display: none;
    }

    &.prev-primary {
      display: none;
    }
  }
`;

export default StyledSlider;
