import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Login, Register, HomePage } from '../index';

function App() {
  return (
    <BrowserRouter>
      <Helmet defaultTitle="Terampil - Beranda">
        <meta name="description" content="Welcome to terampil" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/:id" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
