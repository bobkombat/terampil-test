import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  background-color: #202020;
  box-sizing: border-box;
  padding: 70px 30px;
  @media screen and ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  justify-content: center;

  @media screen and ${(props) => props.theme.breakpoints.sm} {
    /* display: grid;
    grid-auto-row: auto auto auto; */
    overflow-y: scroll;
    width: 100%;
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
