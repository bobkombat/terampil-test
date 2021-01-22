import styled from 'styled-components';
import { mq } from '../../../assets/styles/theme';

export const TagLineStyled = styled.h1`
  position: relative;
  width: 80%;
  flex-direction: column;
  font-size: 60px;
  font-weight: bold;
  text-align: center;
  color: #FDFDFD;
  margin-top: 96px;
  z-index: 2;
  font-family: Archivo,serif;
  
  div {
    padding-left: 100px;
    padding-right: 100px;
  }

  ${mq({
    fontSize: [
      '90px', '60px', '60px', '40px', '24px',
    ],
    width: ['60%', '60%', '70%', '65%', '75%'],
  })};
`;
export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const SubTagLine = styled.p`
  position: relative;
  width: 1000px;
  font-size: 28px;
  font-weight: 300;
  font-style: normal;
  color: #C4C4C4;
  margin-bottom: 70px;
  z-index: 2;
  font-family: Inter;

  ${mq({
    fontSize: [null, '20px', '20px', '12px', null],
    width: [null, '700px', '700px', '400px', '300px'],
    marginLeft: [null, null, '64px', '64px', '24px'],
    marginBottom: [null, null, '30px', '30px', null],
  })};
`;

export const ButtonTagLineContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 78px;
  @media screen and (max-width: 438px) {
    flex-direction: column;
  }
`;

export const ImageBackground = styled.img`
  height: 355px;
  width: 242px;
  pointer-events: none;
  position: absolute;
  z-index: 0;
  right: 340px;
  top: 220px;

  ${mq({
    height: [null, null, null, '180px', '130px'],
    width: [null, null, null, '120px', '90px'],
    right: [null, '240px', '240px', '130px', '15px'],
    top: [null, '140px', '140px', '100px', '100px'],
  })};
`;
