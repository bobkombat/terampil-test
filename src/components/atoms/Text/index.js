import React from 'react';
import PropTypes from 'prop-types';
import { Title } from './Text.styled';

function Text({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
}

Text.propTypes = {};

export default Text;
