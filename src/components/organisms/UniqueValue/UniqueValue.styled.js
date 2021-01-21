import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  /* align-items: flex-start; */

  @media screen and (max-width: 769px) {
    flex-direction: column;
  }
`;
