import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 420px;
  display: flex;
  flex-direction: column;
  margin: 20px 10px;

  video[poster] {
    width: inherit;
    object-fit: cover;
  }
`;

export const VideoPlayer = styled.video`
  width: auto;
  height: 300px;
  border-radius: 20px;
`;

export const Title = styled.h6`
  width: 400px;
  font-family: Archivo;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  margin: 10px 0 16px;
  display: inline-block;
`;

export const ProfileName = styled.p`
  font-family: Archivo;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: rgba(253, 253, 253, 0.7);
  margin: 0;
`;
