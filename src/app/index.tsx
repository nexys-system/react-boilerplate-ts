import React from 'react';
import {
  Switch,
  Route,
  Redirect,
  withRouter,
  RouteComponentProps
} from 'react-router-dom';

import { Stateful, Utils } from '@nexys/material-components';
import * as Links from 'common/link';

import NotFound from '../public/not-found-404';
import Dashboard from './dashboard';
import Profile from '../admin/profile';

import Layout from './layout';

const {
  Auth: { Wrapper },
  Conf: { REDIRECT_URI }
} = Stateful;

function App(props: RouteComponentProps) {
  const handleOnIdle = () => {
    Stateful.Store.set('sessionExpired', true);
    Stateful.Store.set(REDIRECT_URI, props.location.pathname);
    window.location.pathname = Links.Public.logout;
  };

  Utils.useIdleTimer(handleOnIdle, 60);

  return (
    <Layout>
      <Switch>
        <Route path={Links.App.dashboard} component={Dashboard} />
        <Route path={Links.App.profile} component={Profile} />

        <Route path={`${Links.App.base}/`}>
          <Redirect to={Links.App.dashboard} />
        </Route>
        <Route path={Links.App.base} component={NotFound} />
      </Switch>
    </Layout>
  );
}

export default withRouter(Wrapper(App, 'app'));
