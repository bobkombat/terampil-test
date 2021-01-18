import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyled from './Button.styled';

function Button({ children, ...rest }) {
  return <ButtonStyled {...rest}>{children}</ButtonStyled>;
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
    PropTypes.element,
  ]),
};

export default Button;
