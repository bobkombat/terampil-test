import styled from 'styled-components';

export const Container = styled.section`
  padding: 0 50px 0 100px;
  text-align: center;
  margin: 0 auto;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8rem;
    flex-direction: row-reverse;
  }

  @media screen and ${(props) => props.theme.breakpoints.sm} {
    padding: 0px;
    .content {
      flex-direction: column;
      justify-content: center;
      margin-bottom: 4rem;
    }
  }
`;

export const Title = styled.h2`
  font-family: Archivo;
  font-size: 30px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #fdfdfd;
  margin: 0;
  padding: 30px 0;
  margin-top: 5rem;

  @media screen and ${(props) => props.theme.breakpoints.sm} {
    margin-top: 2rem;
    padding: 15px 0;
  }

  @media screen and ${(props) => props.theme.breakpoints.xs} {
    font-size: 25px;
  }
`;

export const ChatContainer = styled.div`
  width: 45%;
  height: auto;

  @media screen and ${(props) => props.theme.breakpoints.sm} {
    width: 90%;
  }
`;
