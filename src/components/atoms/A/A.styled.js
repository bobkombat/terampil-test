import React from 'react';
import styled from 'styled-components';
import LinkProps from './propsComponent';

const Link = styled.a.attrs((props) => ({
  color: LinkProps.checkColor(props),
}))`
  color: ${(props) => props.color};
  text-decoration: none;
  font-size: 16px;
  font-family: 'Archivo';
  font-weight: 600;
  margin: 0;
`;

const StyledLink = React.forwardRef((props, ref) => (
  <Link ref={ref} {...props}>
    {props.children}
  </Link>
));

export default StyledLink;
