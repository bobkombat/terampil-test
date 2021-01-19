import React from 'react';
import PropTypes from 'prop-types';
import { Header, Image } from './Headers.styled';
import InputComponent from 'components/atoms/Input/Input';
import LogoHeader from '../../../assets/png/LogoTerampil.png';

function Headers(props) {
  const { ...rest } = props;
  return (
    <>
      <Header {...rest}>
        <Image src={LogoHeader} alt="logo" />
        {/* <LogoHeader /> */}
        <InputComponent />
      </Header>
    </>
  );
}

Headers.propTypes = {};

export default Headers;
