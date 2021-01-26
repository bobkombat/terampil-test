import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title } from './index.styled';
import LogoMobile from '../../../assets/png/image 8.png';
import LogoMobile2 from '../../../assets/png/image 7.png';
function MobileLink(props) {
  return (
    <Container>
      <Title>Mobile</Title>
      <img style={{ width: '182px', height: '72px' }} src={LogoMobile2} alt="logoAndroin" />
      <img
        style={{ width: '182px', height: '72px', backgroundPosition: 'cover' }}
        src={LogoMobile}
        alt="logoAndroin"
      />
    </Container>
  );
}

MobileLink.propTypes = {};

export default MobileLink;
