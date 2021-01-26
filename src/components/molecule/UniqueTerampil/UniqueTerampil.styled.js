import styled from 'styled-components';

export const ContainerTitle = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px 50px;
  margin-top: 70px;
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 50vh;
  }

  @media screen and (max-width: 576px) {
    width: 90%;
    height: 70vh;
  }
`;

export const Title = styled.h4`
  font-family: Archivo;
  font-size: 30px;
  font-weight: bold;
  margin: 0;
  text-align: left;
  color: #fdfdfd;

  @media screen and (max-width: 576px) {
    font-size: 20px;
  }
`;

export const PointTitle = styled.p`
  margin: 0;
  font-family: Inter;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: normal;
  text-align: left;
  color: #949d9c;
  display: inline-block;

  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`;

export const Icon = styled.img`
  margin-right: 15px;
`;

export const ContainerPoint = styled.div`
  display: flex;
  align-items: center;
`;

export const TitlePrice = styled.h6`
  margin: 0;
  font-family: Inter;
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.08;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;

  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`;
