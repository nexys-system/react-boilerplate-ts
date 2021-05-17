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
import Layout from '../admin/layout';
import SuperAdmin from './superadmin';

const {
  Auth: { Wrapper },
  Conf: { REDIRECT_URI }
} = Stateful;

const toRoute = (r = '/') => Links.Admin.base + r;

function SuperAdminRoutes(props: RouteComponentProps) {
  const handleOnIdle = () => {
    Stateful.Store.set('sessionExpired', true);
    Stateful.Store.set(REDIRECT_URI, props.location.pathname);
    window.location.pathname = Links.Public.logout;
  };

  Utils.useIdleTimer(handleOnIdle, 60);

  return (
    <Layout>
      <Switch>
        <Route path={Links.SuperAdmin.base} component={SuperAdmin} />

        <Route path={toRoute('/')}>
          <Redirect to={Links.Admin.dashboard} />
        </Route>
        <Route path={toRoute()} component={NotFound} />
      </Switch>
    </Layout>
  );
}

export default withRouter(Wrapper(SuperAdminRoutes, 'superadmin'));
