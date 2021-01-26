import styled from 'styled-components';

export const Container = styled.section`
  height: 120px;
  display: flex;
  flex-direction: column;

  .link {
    margin: 24px 134px 0 8px;
    font-family: Open Sans;
    font-size: 16px;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #fdfdfd;
  }
`;

export const Title = styled.h6`
  font-family: Open Sans;
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
  font-family: Open Sans;
  font-size: 16px;
  font-weight: 400;
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
  font-family: Open Sans;
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

export const LogoImage = styled.img`
  width: 100%;
  height: 72px;

  @media screen and ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    height: 72px;
  }
`;
