import React from 'react';
import PropTypes from 'prop-types';
import { ContainerImage, Image, BackgroundImage } from './UniqueImage.styled';

function UniqueImage(props) {
  return (
    <ContainerImage>
      <BackgroundImage />
      <Image />
    </ContainerImage>
  );
}

UniqueImage.propTypes = {};

export default UniqueImage;
