import styled from 'styled-components';

export const CardImage = styled.div`
  width: 295px;
  height: 525px;
  margin-left: 21px;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  background-color: black;
  border-radius: 12px;
  background-image: url();
`;

export const Image = styled.img`
  width: inherit;
  border-radius: 12px;
  background-color: black;
  filter: opacity(0.79);
`;

export const TitleName = styled.h5`
  width: inherit;
  position: absolute;
  font-weight: bold;
  bottom: 85px;
  left: 0px;
  margin: 10px 0px 10px;
  font-family: Archivo;
  font-size: 24px;
  text-align: center;
  color: #ffff;
`;

export const Title = styled.p`
  width: inherit;
  position: absolute;
  bottom: 37.3px;
  left: 0px;
  margin: 10px 0px 10px;
  font-family: 'Inter';
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  font-weight: normal;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
`;
