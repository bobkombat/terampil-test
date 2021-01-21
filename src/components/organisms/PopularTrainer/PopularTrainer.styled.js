import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  /* padding: 0 0 72px; */
  background-color: #202020;
  padding-top: 40px;
`;

export const Title = styled.div`
  .title-trainer {
    font-family: Archivo;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    color: #fdfdfd;
  }
`;

export const CardContainer = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: space-around; */
  padding: 50px 10px 43px 10px;
  overflow: auto;
  @media screen and (max-width: 769px) {
    /* flex-direction: column; */
    padding: 0;
    overflow: auto;
  }
  @media screen and (max-width: 567px) {
    flex-direction: column;
    /* overflow: auto; */
  }

  /* square buttons */
  .rec.rec-arrow {
    /* width: 30px;
    height: 30px; */
    /* padding: 6.2px 11.2px 6.2px 9.9px; */
    border-radius: 50%;
    color: rgba(255, 255, 255, 0.7);
    background-color: #626262;
    font-size: 0.7em;
    font-weight: normal;
    font-family: Inter;
  }
  /* round buttons on hover */
  .rec.rec-arrow:hover {
    border-radius: 50%;
    /* background-color: white; */
  }
  /* hide disabled buttons */
  .rec.rec-arrow:disabled {
    visibility: hidden;
  }
  /* disable default outline on focused items */
  /* add custom outline on focused items */
  .rec-carousel-item {
    /* background-color: black;
    color: white; */
  }
  .rec-carousel-item:focus {
    outline: none;
    /* box-shadow: inset 0 0 1px 1px lightgrey; */
  }
  .rec.rec-dot {
    color: white;
  }
`;
