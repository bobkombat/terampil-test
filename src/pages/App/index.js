import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import HomePage from 'pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Helmet defaultTitle="Terampil - Beranda">
        <meta name="description" content="Welcome to terampil" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/:id" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
