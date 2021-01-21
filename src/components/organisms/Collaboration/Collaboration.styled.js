import styled from 'styled-components';

export const Container = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  .image-icon {
    width: 100%;
    display: flex;
    justify-content: space-around;

    @media screen and (max-width: 768px) {
      display: grid;
      justify-items: center;
      grid-template-columns: auto auto auto;
      gap: 15px;
    }

    @media screen and (max-width: 576px) {
      display: grid;
      justify-items: center;
      grid-template-columns: auto auto;
      gap: 15px;
    }
  }
`;

export const Text = styled.h6`
  height: 26px;
  margin: 0;
  margin: 0 248px 67px 256px;
  font-family: Archivo;
  font-size: 24px;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    margin: 0 5px 20px 5px;
  }
  @media screen and (max-width: 576px) {
    font-size: 18px;
    margin: 0 5px 20px 5px;
  }

  span {
    color: #00debf;
  }
`;

export const Image = styled.img`
  color: white;
`;
