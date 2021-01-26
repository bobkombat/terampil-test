import React from 'react';
import {
  ButtonTagLineContainer,
  Container,
  ImageBackground,
  SubTagLine,
  TagLineStyled,
} from './TagLine.styled';
import Button from '../../atoms/Button';
import logo from '../../../assets/png/terampil-transparent.png';

const TagLine = () => {
  return (
    <Container>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <TagLineStyled>Learn anytime, anywhere, at your own pace.</TagLineStyled>
        <ImageBackground src={logo} alt={'Transparent Logo'} />
      </div>
      <SubTagLine>
        Watch <b>thousand of lesson</b> from the best as they share their stories, skills,
        shortcuts, failures, and success
      </SubTagLine>
      <ButtonTagLineContainer>
        <Button primary large>
          Lihat Langganan
        </Button>
        <Button secondary large>
          Mulai Kelas Gratis
        </Button>
      </ButtonTagLineContainer>
    </Container>
  );
};

export default TagLine;
