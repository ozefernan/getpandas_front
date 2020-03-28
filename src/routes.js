/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { isAuthenticated } from './shared/auth';
import Main from './pages/Main';
import Login from './pages/Login';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />

      {/* TESTE */}
      {/* <Route path="/main" component={Main} /> */}

      {/* PRODUCAO */}
      <PrivateRoute path="/main" component={Main} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
