import React from 'react';
import A from './';

const story = {
  title: 'Atom/A',
  component: A,
};

export const Primary = () => (
  <A primary to="#">
    Login
  </A>
);
export const Secondary = () => (
  <A secondary to="#">
    {' '}
    Login
  </A>
);

export default story;
