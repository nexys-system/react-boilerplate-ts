import React from 'react';
import {
  Switch,
  Route,
  Redirect,
  withRouter,
  RouteComponentProps
} from 'react-router-dom';

import Layout from './layout';
import Dashboard from './dashboard';
import Crud from './crud';
import Profile from './profile';
import authWrapper from '../common/auth/wrapper';

const routePrefix = '/app';

const toRoute = (r = '/') => routePrefix + r;

const UnauthorizedPage = (props: RouteComponentProps) => (
  <p>This content is unauthorized</p>
);

function App(props: RouteComponentProps) {
  return (
    <Layout>
      <Switch>
        <Route
          path={toRoute('/dashboard')}
          component={Dashboard}
          props={props}
        />
        <Route path={toRoute('/crud')} component={Crud} props={props} />
        <Route path={toRoute('/profile')} component={Profile} props={props} />
        <Route
          path={toRoute('/unauth')}
          component={authWrapper(
            UnauthorizedPage,
            'permissionThatDoesNotExist'
          )}
          props={props}
        />
        <Route
          path={toRoute('/')}
          component={() => <Redirect to={'/app/dashboard'} />}
        />
      </Switch>
    </Layout>
  );
}

export default authWrapper(App, 'app');
