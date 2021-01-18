import React from 'react';
import Button from './';

<<<<<<< HEAD
export default {
  title: 'Atom/Button',
=======
const story = {
  title: 'Form/Button',
>>>>>>> a474ec99f9f51428b50458dff4e4149d849e061d
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

export default story;
