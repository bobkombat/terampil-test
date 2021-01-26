import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  margin-bottom: 40px;
  justify-content: center;
  align-items: center;

  video[poster] {
    object-fit: cover;
    border-radius: 20px;
  }

  .video-adds {
    border-radius: 20px;
    width: 90%;
  }
`;

export const VideoPlayer = styled.video`
  width: inherit;
  height: 720px;

  @media screen and ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 420px;
  }

  @media screen and ${(props) => props.theme.breakpoints.xs} {
    width: 100%;
    height: 220px;
  }
`;
