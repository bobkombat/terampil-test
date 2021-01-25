import styled from 'styled-components';

export const CardContainer = styled.div``;
export const ImageTestimoni = styled.div`
  width: 366px;
  height: 427px;
  background-image: url('${(props) => props.image}');
  background-size: cover;
  border-radius: 20px;
  position: absolute;
  top: -80px;
  left: 120px;
  z-index: 1;

  @media screen and ${(props) => props.theme.breakpoints.sm} {
    top: -80px;
    left: 30px;
  }

  @media screen and ${(props) => props.theme.breakpoints.xs} {
    width: 180px;
    height: 220px;
    top: -60px;
    left: -10px;
  }
`;

export const ContainerTestimoni = styled.div`
  width: 743px;
  height: 392px;
  padding: 53px 43px 52px 244px;
  border-radius: 20px;
  background-color: #202020;
  box-sizing: border-box;
  position: relative;
  right: -80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: -1;

  @media screen and ${(props) => props.theme.breakpoints.sm} {
    right: 0;
    padding: 40px 30px 40px 410px;
  }

  @media screen and ${(props) => props.theme.breakpoints.xs} {
    width: 100%;
    height: 456px;
    padding: 160px 5px 10px 5px;
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
    font-size: 14px;
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
    font-size: 18px;
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
