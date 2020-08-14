import React from 'react';
import { Switch, Route, Redirect, RouteComponentProps } from 'react-router-dom';

import Layout from './layout';
import Dashboard from './dashboard';
import Crud from './crud';
import Profile from './profile';
import authWrapper from '../common/auth/wrapper';

import * as Links from 'common/link';

const UnauthorizedPage = () => <p>This content is unauthorized</p>;

function App(props: RouteComponentProps) {
  return (
    <Layout>
      <Switch>
        <Route path={Links.App.dashboard} component={Dashboard} props={props} />
        <Route path={Links.App.crud} component={Crud} props={props} />
        <Route path={Links.App.profile} component={Profile} props={props} />
        <Route
          path={Links.App.unauthorizedPage}
          component={authWrapper(
            UnauthorizedPage,
            'permissionThatDoesNotExist'
          )}
          props={props}
        />
        <Route
          path={Links.App.default}
          component={() => <Redirect to={Links.App.dashboard} />}
        />
      </Switch>
    </Layout>
  );
}

export default authWrapper(App, 'app');
