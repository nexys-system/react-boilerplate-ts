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

import * as Links from 'common/link';
import App from './app';
import Admin from './admin';
import SuperAdmin from './superadmin';
import Public from './public';

const history = History.createBrowserHistory({
  basename: process.env.PUBLIC_URL || ''
});

const MyRouter = (props: RouteComponentProps) => {
  return (
    <SnackbarProvider maxSnack={3}>
      <Switch>
        <Route path={Links.App.base} component={App} props={props} />
        <Route path={Links.Admin.base} component={Admin} props={props} />
        <Route
          path={Links.SuperAdmin.base}
          component={SuperAdmin}
          props={props}
        />
        <Route path={Links.Public.base} component={Public} props={props} />
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
