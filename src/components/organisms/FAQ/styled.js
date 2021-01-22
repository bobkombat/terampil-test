import { mq } from 'assets/styles/theme';
import styled from 'styled-components';

export const Container = styled.section`
  margin: 60px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .accordion-container {
    margin: 0 auto;
  }

  ${mq({
    '.accordion-container': {
      margin: [null, null, null, null, '0 10px'],
    },
  })}
`;

export const Title = styled.h1`
  font-family: Archivo;
  font-size: 30px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #fdfdfd;

  @media screen and (max-width: 576px) {
    flex-wrap: wrap;
    font-size: 24px;
    margin-bottom: 30px;
  }
`;
