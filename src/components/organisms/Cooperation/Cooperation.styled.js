import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  height: 180px;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 50px auto;
  padding: 50px;
`;

export const Title = styled.div`
  font-family: Archivo;
  font-size: 24px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #fdfdfd;

  @media screen and (max-width: 576px) {
    /* display: grid;
    grid-template-columns: auto auto; */
    flex-wrap: wrap;
    font-size: 18px;
    margin-bottom: 30px;
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 576px) {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    gap: 10px;
  }
`;

export const ImageDiv = styled.div`
  width: 150px;
  height: 55px;
  text-align: center;
  align-items: flex-end;
  display: flex;
  justify-content: center;
`;
