import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 70px auto;
  padding: 30px 30px;
  box-sizing: border-box;
  /* position: relative; */
`;

export const ContainerSlide = styled.div`
  position: relative;
`;

export const ButtonSlider = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 95%;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  padding: 30px 0 80px 0;
  @media screen and ${(props) => props.theme.breakpoints.xs} {
    font-size: 25px;
    padding: 30px 0 40px 0;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 30px 0;
  padding: 0 100px;
  /* position: relative; */
`;
