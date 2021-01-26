import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './UniqueValue.styled';

import UniqueImage from '../../molecule/UniqueImage/';
import UniqueTitle from 'components/molecule/UniqueTerampil';

function UniqueValue(props) {
  return (
    <Container>
      <UniqueImage />
      <UniqueTitle />
    </Container>
  );
}

UniqueValue.propTypes = {};

export default UniqueValue;
