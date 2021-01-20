import React from 'react';
import PropTypes from 'prop-types';

import { Header, Image } from './Headers.styled';
import InputComponent from 'components/atoms/Input/Input';
import LogoHeader from '../../../assets/png/LogoTerampil.png';
import Dropdown from 'components/atoms/Dropdown';
import A from 'components/atoms/A';
import Button from 'components/atoms/Button';

function Headers(props) {
  const { ...rest } = props;
  return (
    <>
      <Header {...rest}>
        <Image src={LogoHeader} alt="logo" />
        <Dropdown>Kategori</Dropdown>
        <InputComponent />
        <div className="header-link">
          <A to="/prakerja" primary>
            Prakerja
          </A>
          <A to="/trainer" primary>
            Jadi trainer
          </A>
        </div>
        <div className="header-button">
          <Button secondary medium>
            Masuk
          </Button>
          <Button medium>Daftar</Button>
        </div>
      </Header>
    </>
  );
}

Headers.propTypes = {};

export default Headers;
