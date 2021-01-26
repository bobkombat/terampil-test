import React from 'react';
import Search from './Input.styled';
import SearchIcon from '../../../assets/png/Search.png';

function InputComponent() {
  return (
    <Search>
      <img src={SearchIcon} alt="search" />
      <input type="text" placeholder="Ingin belajar apa hari ini ?" />
    </Search>
  );
}

// Input.propTypes = {};

export default InputComponent;
