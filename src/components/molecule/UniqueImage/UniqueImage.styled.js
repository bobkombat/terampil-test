import styled from 'styled-components';

export const ContainerImage = styled.div`
  width: 60%;
  height: 520px;
  position: relative;
  /* background-color: white; */
  @media screen and (max-width: 769px) {
    right: 40px;
    width: 100%;
    height: 220px;
    background-position: cover;
  }
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 100px;
  left: 50px;
  width: 674px;
  height: 424px;
  background-color: #202020;
  border-radius: 20px;

  @media screen and (max-width: 769px) {
    display: none;
  }
`;

export const Image = styled.div`
  position: absolute;
  top: -40px;
  right: 0;
  width: 750px;
  height: 500px;
  background-image: url('https://images.unsplash.com/reserve/NFuTknHQTsOc0uHAA4E4_4968226460_33fb941a16_o.jpg?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80');
  border-radius: 20px;

  @media screen and (max-width: 769px) {
    left: 90px;
    right: 40px;
    width: 520px;
    height: 320px;
    background-size: cover;
  }

  @media screen and (max-width: 576px) {
    position: relative;
    top: 0;
    left: 60px;
    right: 40px;
    width: 300px;
    height: 220px;
    background-size: cover;
    box-sizing: border-box;
  }
`;
