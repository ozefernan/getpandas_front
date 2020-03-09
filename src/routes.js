/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';

import { isAuthenticated } from './shared/auth';
import Main from './pages/Main';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

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
      <PrivateRoute path="/Main" component={Main} />
      <PrivateRoute path="/cadastro" component={Cadastro} />
    </Switch>
  </BrowserRouter>
);

PrivateRoute.propTypes = {
  component: PropTypes.isRequired,
  location: PropTypes.isRequired,
};

export default Routes;
