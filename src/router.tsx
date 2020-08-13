import React from 'react';

import {
  Switch,
  Route,
  withRouter,
  Router,
  RouteComponentProps
} from 'react-router-dom';
import * as History from 'history';

import { SnackbarProvider } from '@nexys/material-components';

import App from './app';
import Login from './public/login';
import Signup from './public/signup';

import Logout from './public/logout';

const history = History.createBrowserHistory();

const MyRouter = (props: RouteComponentProps) => {
  return (
    <SnackbarProvider maxSnack={3}>
      <Switch>
        <Route path="/app" component={App} props={props} />
        <Route path="/logout" component={Logout} props={props} />
        <Route path="/signup" component={Signup} props={props} />
        <Route path="/" component={Login} props={props} />
      </Switch>
    </SnackbarProvider>
  );
};

const R = withRouter(MyRouter);

export default () => (
  <Router history={history}>
    <R />
  </Router>
);
