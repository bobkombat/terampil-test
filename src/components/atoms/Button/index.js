import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyled from './Button.styled';

function Button({ children, ...rest }) {
  return <ButtonStyled {...rest}>{children}</ButtonStyled>;
}

PropTypes.ButtonComponent = {
  children: PropTypes.element.isRequired,
};

export default Button;
