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

import Dashboard from './dashboard';
import User from './user';
import Permission from './permission';
import Instance from './instance';
import Profile from './profile';
import NotFound from '../public/not-found-404';
import EntityGenerator from './entity-generator';

import Layout from './layout';

const {
  Auth: { Wrapper },
  Conf: { REDIRECT_URI }
} = Stateful;

function Admin(props: RouteComponentProps) {
  const handleOnIdle = () => {
    Stateful.Store.set('sessionExpired', true);
    Stateful.Store.set(REDIRECT_URI, props.location.pathname);
    window.location.pathname = Links.Public.logout;
  };

  Utils.useIdleTimer(handleOnIdle, 60);

  return (
    <Layout>
      <Switch>
        <Route
          path={Links.Admin.dashboard}
          component={Dashboard}
          props={props}
        />
        <Route path={Links.Admin.user} component={User} props={props} />
        <Route
          path={Links.SuperAdmin.permission}
          component={Permission}
          props={props}
        />
        <Route
          path={Links.SuperAdmin.instance}
          component={Instance}
          props={props}
        />

        <Route path={Links.Admin.profile} component={Profile} />
        <Route path={Links.SuperAdmin.entity} component={EntityGenerator} />

        <Route path={`${Links.Admin.base}/`}>
          <Redirect to={Links.Admin.dashboard} />
        </Route>
        <Route path={Links.Admin.base} component={NotFound} />
      </Switch>
    </Layout>
  );
}

export default withRouter(Wrapper(Admin, 'admin'));
