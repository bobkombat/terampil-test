import styled from 'styled-components';

export const Container = styled.section`
  /* width: 80%; */
  height: 120px;
  /* background-color: white; */
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start; */
  .link {
    margin: 24px 134px 0 8px;
    font-family: OpenSans;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #fdfdfd;
  }
`;

export const Title = styled.h6`
  font-family: OpenSans;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #fdfdfd;
  margin: 0 0 20px 0;

  @media screen and ${(props) => props.theme.breakpoints.sm} {
    margin: 10px 1px 0 0;
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  margin: 24px 1px 0 0;
  font-family: OpenSans;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #fdfdfd;
  @media screen and ${(props) => props.theme.breakpoints.sm} {
    margin: 10px 1px 0 0;
    font-size: 14px;
  }
`;

export const Address = styled.p`
  font-family: OpenSans;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #fdfdfd;
  margin: 10px 0;
  @media screen and ${(props) => props.theme.breakpoints.sm} {
    margin: 10px 1px 0 0;
    font-size: 14px;
  }
`;
