import styled from 'styled-components';

export const CardImage = styled.div`
  width: 100%;
  height: 655px;
  cursor: pointer;
  border-radius: 12px;
  margin: 0 10px;
  background: #626262;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-image: url('${(props) => props.src}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: all 0.1s ease-out;

  @media screen and ${(props) => props.theme.breakpoints.xl} {
    height: 555px;
  }

  @media screen and ${(props) => props.theme.breakpoints.lg} {
    height: 455px;
  }

  @media screen and ${(props) => props.theme.breakpoints.md} {
    height: 355px;
    margin: 0 5px;
  }

  @media screen and ${(props) => props.theme.breakpoints.sm} {
    height: 550px;
  }

  @media screen and ${(props) => props.theme.breakpoints.xs} {
    height: 300px;
  }
`;

export const BottomContainer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: linear-gradient(179.45deg, rgba(0, 0, 0, 0) 27.46%, #101010 99.52%);
  padding-top: 40px;
`;

export const Image = styled.img`
  width: inherit;
  border-radius: 12px;
  background-color: black;
`;

export const TitleName = styled.h5`
  width: inherit;
  font-weight: bold;
  margin: 10px 0px 10px;
  font-family: Archivo;
  font-size: 24px;
  text-align: center;
  color: #ffff;

  @media screen and ${(props) => props.theme.breakpoints.xs} {
    font-size: 14px;
  }
`;

export const Title = styled.p`
  width: inherit;
  margin: 10px 0px 10px;
  font-family: 'Inter';
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  font-weight: normal;
  font-size: 16px;
  text-align: center;
  color: #ffffff;

  @media screen and ${(props) => props.theme.breakpoints.xs} {
    font-size: 12px;
  }
`;
