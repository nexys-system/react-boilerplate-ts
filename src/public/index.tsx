import React from 'react';

import { Switch, Route, RouteComponentProps, Redirect } from 'react-router-dom';

import { Stateful } from '@nexys/material-components';

import Login from './login';
import Signup from './signup';
import Unauthorized from './unauthorized';
import Logout from './logout';

const MyRouter = (props: RouteComponentProps) => {
  return (
    <Switch>
      <Route path="/logout" component={Logout} props={props} />
      <Route path="/signup" component={Signup} props={props} />
      <Route path="/unauthorized" component={Unauthorized} props={props} />
      <Route path="/login" component={Login} props={props} />
      <Route
        path={'/'}
        component={() => {
          // if the user is already logged in, redirect to the app main page
          if (Stateful.Credentials.getProfile()) {
            return <Redirect to={'/app'} />;
          }

          // else login
          return <Redirect to={'/login'} />;
        }}
      />
    </Switch>
  );
};

export default MyRouter;
