import facepaint from 'facepaint';

// Global Theme Variable
export const globalTheme = {
  color: {
    primary: '#00debf',
    secondary: '#000004',
    gray: '#1d1d1d',
    white: '#fdfdfd',
  },
};

// Media query template
export const mq = facepaint([
  '@media screen and (max-width: 1441px)',
  '@media screen and (max-width: 1201px)',
  '@media screen and (max-width: 769px)',
  '@media screen and (max-width: 577px)',
]);
