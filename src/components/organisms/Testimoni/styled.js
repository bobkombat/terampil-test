import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 50px auto;
  padding: 30px 30px;
  box-sizing: border-box;

  @media screen and ${(props) => props.theme.breakpoints.xs} {
    padding: 30px 5px;
    margin: 20px auto;
  }
`;

export const ContainerSlide = styled.div`
  position: relative;
  margin-top: -5rem;
`;

export const ButtonSlider = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 95%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and ${(props) => props.theme.breakpoints.xs} {
    display: none;
  }
`;

export const Title = styled.h2`
  font-family: Archivo;
  width: 100%;
  font-size: 30px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #fdfdfd;
  margin: 0 0px 30px;
  padding: 30px 0 50px 0;
  @media screen and ${(props) => props.theme.breakpoints.xs} {
    font-size: 25px;
    padding: 30px 0 40px 0;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 50px;
  padding: 0 100px;

  @media screen and ${(props) => props.theme.breakpoints.sm} {
    padding: 0px;
  }
`;
