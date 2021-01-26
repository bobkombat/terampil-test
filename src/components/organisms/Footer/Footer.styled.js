import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  /* display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  align-content: center;
  justify-self: center;
  margin: 30px auto;
  padding: 10px 100px;
  box-sizing: border-box; */
  padding-bottom: 20px;
  height: 25vh;

  display: flex;
  justify-content: space-around;

  font-family: 'Open Sans', sans-serif;

  @media screen and ${(props) => props.theme.breakpoints.sm} {
    width: 90%;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    row-gap: 80px;
    column-gap: 20px;
    padding-left: 20px;
    justify-self: center;
  }
`;
