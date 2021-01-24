import facepaint from 'facepaint';

// Global Theme Variable
export const globalTheme = {
  color: {
    primary: '#00debf',
    secondary: '#000004',
    transparent: 'rgba(255,255,255, 0)',
    gray: '#1d1d1d',
    white: '#fdfdfd',
  },
  breakpoints: {
    xl: '(max-width: 1441px)',
    lg: '(max-width: 1281px)',
    md: '(max-width: 993px)',
    sm: '(max-width: 769px)',
    xs: '(max-width: 577px)',
  },
};

// Media query template
export const mq = facepaint([
  '@media screen and (max-width: 1441px)',
  '@media screen and (max-width: 1281px)',
  '@media screen and (max-width: 993px)',
  '@media screen and (max-width: 769px)',
  '@media screen and (max-width: 577px)',
]);
