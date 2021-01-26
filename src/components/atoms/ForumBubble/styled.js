import styled from 'styled-components';

export const Container = styled.figure`
  width: 75%;
  margin: -30px 0 0 0;

  transition: all 0.3s ease;

  &.left {
    float: left;
  }

  &.right {
    float: right;
  }
`;

export const Chat = styled.div`
  padding: 24px;
  background-color: #242830;

  display: flex;
  flex: 0 1;
  align-items: center;
  border-radius: 10px;

  @media screen and ${(props) => props.theme.breakpoints.sm} {
    padding: 16px;
  }
`;

export const Img = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  border: 3px solid #242830;
  margin-right: 16px;
  flex-shrink: 0;

  position: relative;
  top: 30px;
  left: 24px;

  background-image: url('${(props) => props.src}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: all 0.1s ease-out;

  &.right {
    left: 84%;
  }

  @media screen and ${(props) => props.theme.breakpoints.xl} {
    &.right {
      left: 78%;
    }
  }

  @media screen and ${(props) => props.theme.breakpoints.lg} {
    width: 50px;
    height: 50px;
  }

  @media screen and ${(props) => props.theme.breakpoints.md} {
    &.right {
      left: 70%;
    }
  }

  @media screen and ${(props) => props.theme.breakpoints.sm} {
    &.right {
      left: 85%;
    }
  }

  @media screen and ${(props) => props.theme.breakpoints.xs} {
    width: 40px;
    height: 40px;

    left: 12px;

    &.right {
      left: 75%;
    }
  }
`;

export const Text = styled.p`
  margin: 0;
  font-family: 'Inter', sans-serif;
  font-weight: 300;
  font-size: 16px;
  color: ${(props) => props.theme.color.white};

  transition: all 0.1s ease-out;

  text-align: left;
  margin-left: 84px;

  &.right {
    margin-left: 0px;
    margin-right: 84px;
  }

  @media screen and ${(props) => props.theme.breakpoints.lg} {
    margin-left: 68px;
    font-size: 13px;

    &.right {
      margin-right: 68px;
    }
  }

  @media screen and ${(props) => props.theme.breakpoints.xs} {
    margin-left: 54px;

    &.right {
      margin-right: 54px;
    }
  }
`;
