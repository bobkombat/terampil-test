import React from 'react';
import PropTypes from 'prop-types';
import SearchStyled from './Search.styled';

function Search({ children, ...rest }) {
  return <SearchStyled {...rest}>{children}</SearchStyled>;
}

PropTypes.Search = {
  children: PropTypes.element.isRequired,
};

export default Search;
