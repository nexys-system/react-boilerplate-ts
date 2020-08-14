import React from 'react';

import { Switch, Route, RouteComponentProps, Redirect } from 'react-router-dom';

import { Stateful } from '@nexys/material-components';

import * as Links from 'common/link';

import Login from './login';
import Signup from './signup';
import Unauthorized from './unauthorized';
import Logout from './logout';

const MyRouter = (props: RouteComponentProps) => {
  return (
    <Switch>
      <Route path={Links.Public.logout} component={Logout} props={props} />
      <Route path={Links.Public.signup} component={Signup} props={props} />
      <Route
        path={Links.Public.unauthorized}
        component={Unauthorized}
        props={props}
      />
      <Route path={Links.Public.login} component={Login} props={props} />
      <Route
        path={Links.Public.default}
        component={() => {
          // if the user is already logged in, redirect to the app main page
          if (Stateful.Credentials.getProfile()) {
            return <Redirect to={Links.App.default} />;
          }

          // else login
          return <Redirect to={Links.Public.login} />;
        }}
      />
    </Switch>
  );
};

export default MyRouter;
