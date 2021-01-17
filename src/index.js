import React from 'react';
import ReactDOM from 'react-dom';
import FontFaceObserver from 'fontfaceobserver';
import { ThemeProvider } from 'styled-components';

import { globalTheme } from 'assets/styles/theme';
import './index.css';
import App from 'pages/App';

// Loading font async and checking the font cache
const archivoObserver = new FontFaceObserver('Archivo', {});
const OpenSansOberserver = new FontFaceObserver('Open Sans', {});
const interObserver = new FontFaceObserver('Inter', {});
const html = document.documentElement;

if (sessionStorage.fontsLoaded) {
  html.classList.add('root-fonts-loaded');
  html.classList.remove('root-fonts-loading');
} else {
  html.classList.add('root-fonts-loading');

  Promise.all([archivoObserver.load(), OpenSansOberserver.load(), interObserver.load()])
    .then(() => {
      sessionStorage.fontsLoaded = true;
      console.log('All fonts loaded');

      html.classList.remove('root-fonts-loading');
      html.classList.add('root-fonts-loaded');
    })
    .catch(() => {
      sessionStorage.fontsLoaded = false;
    });
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={globalTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
