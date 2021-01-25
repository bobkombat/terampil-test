import styled from 'styled-components';

export const Container = styled.div`
  width: 52%;
  height: 600px;
  border-radius: 10px;

  transition: all 0.3s ease;

  display: flex;
  align-items: center;

  position: relative;

  .main-thumb {
    width: 95%;
    height: 80%;
    background-color: #c4c4c4;

    border-radius: 10px;

    background-image: url('${(props) => props.src}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    transition: all 0.1s ease-out;
  }

  .bg-thumb {
    width: 85%;
    height: 400px;
    background-color: #1d1d1d;

    z-index: -1;

    border-radius: 20px;

    position: absolute;

    bottom: 0;
    left: 15%;
    top: 30%;
  }

  @media screen and ${(props) => props.theme.breakpoints.sm} {
    width: 90%;
    height: 450px;

    .bg-thumb {
      height: 300px;
    }
  }

  @media screen and ${(props) => props.theme.breakpoints.xs} {
    width: 90%;
    height: 300px;

    .bg-thumb {
      height: 200px;
    }
  }
`;
