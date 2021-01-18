import React from 'react';
import Button from './';

export default {
  title: 'Atom/Button',
  component: Button,
};

export const Primary = () => <Button primary>Login</Button>;
export const Secondary = () => (
  <Button secondary medium>
    {' '}
    Login
  </Button>
);
export const Rounded = () => <Button rounded> Login</Button>;
