import React from 'react';
import PropTypes from 'prop-types';
import { H1 } from './Text.styled';

function Text({ children, ...rest }) {
  return <H1 {...rest}>{children}</H1>;
}

Text.propTypes = {};

export default Text;
