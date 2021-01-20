import styled from 'styled-components';

export const CardImage = styled.div`
  width: 295px;
  height: 525px;
  margin-left: 21px;
  box-sizing: border-box;
  position: relative;
  z-z-index: -1000;
  /* background-image: url(); */
`;

export const Image = styled.img`
  width: inherit;
  border-radius: 12px;
`;

export const Title = styled.h6`
  width: inherit;
  position: absolute;
  bottom: 85px;
  left: 0px;
  margin: 10px 0px 10px;
  /* padding: 0 10px 0 10px; */
  font-family: Archivo;
  font-size: 24px;
  text-align: center;
`;
