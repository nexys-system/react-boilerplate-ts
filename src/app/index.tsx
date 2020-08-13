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

const routePrefix = '/app';

const toRoute = (r = '/') => routePrefix + r;

function App(props: RouteComponentProps) {
  return (
    <Layout>
      <Switch>
        <Route
          path={toRoute('/dashboard')}
          component={Dashboard}
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

export default withRouter(App); //authWrapper(App, 'admin'));
