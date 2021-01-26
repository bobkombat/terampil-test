import styled from 'styled-components';

export const CardContainer = styled.div`
  position: relative;
  margin-top: 60px;
`;
export const ImageTestimoni = styled.div`
  width: 20rem;
  height: 427px;
  background-image: url('${(props) => props.image}');
  background-size: cover;
  border-radius: 20px;
  position: relative;
  top: -60px;
  left: -70px;
  @media screen and ${(props) => props.theme.breakpoints.sm} {
    left: 30px;
  }

  @media screen and ${(props) => props.theme.breakpoints.xs} {
    width: 40%;
    height: 180px;
    left: 5px;
    top: -50px;
  }
`;

export const ContainerTestimoni = styled.div`
  width: 743px;
  height: 392px;
  padding: 40px 43px 52px 240px;
  border-radius: 20px;
  background-color: #202020;
  box-sizing: border-box;
  position: relative;
  right: -30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: -1;
  margin-top: -25rem;

  @media screen and ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    right: 0;
    padding: 40px 30px 40px 410px;
  }

  @media screen and ${(props) => props.theme.breakpoints.xs} {
    width: 100%;
    height: 456px;
    padding: 160px 5px 10px 175px;
  }
`;

export const Testimoni = styled.p`
  font-family: Inter;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: normal;
  text-align: left;
  color: #fdfdfd;

  @media screen and ${(props) => props.theme.breakpoints.xs} {
    font-size: 13px;
  }
`;

export const ProfileTestimoni = styled.h5`
  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #fdfdfd;
  margin: 0;

  @media screen and ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
  }
`;

export const JobProfile = styled.p`
  font-family: Inter;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #949d9c;
  margin: 0;
`;
