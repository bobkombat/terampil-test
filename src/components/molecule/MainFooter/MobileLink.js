import React from 'react';
import { Container, Title, LogoImage } from './index.styled';
import LogoMobile1 from '../../../assets/png/image 8.png';
import LogoMobile2 from '../../../assets/png/image 7.png';
function MobileLink() {
  return (
    <Container>
      <Title>Mobile</Title>
      <LogoImage src={LogoMobile2} alt="logoAndroin" />
      <LogoImage src={LogoMobile1} alt="logoAndroin" />
    </Container>
  );
}

export default MobileLink;
