import React from 'react';
import PropTypes from 'prop-types';
import StyledLink from './A.styled.js';
import { Link } from 'react-router-dom';

function A({ children, to, ...rest }) {
  return (
    <Link to={to} {...rest} component={StyledLink}>
      {children}
    </Link>
  );
}

Link.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
    PropTypes.element,
  ]),
  to: PropTypes.string.isRequired,
};

export default A;
