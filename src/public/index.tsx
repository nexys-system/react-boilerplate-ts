import React from 'react';
import {
  Switch,
  Route,
  Redirect,
  withRouter,
  RouteComponentProps
} from 'react-router-dom';

import * as Links from '../common/link';
import Login from './login';
import Logout from './logout';
import SignUp from './sign-up';

function Public(props: RouteComponentProps) {
  return (
    <Switch>
      <Route path={Links.Public.login} component={Login} props={props} />
      <Route path={Links.Public.logout} component={Logout} props={props} />
      <Route path={Links.Public.signUp} component={SignUp} props={props} />
      <Route path={Links.Public.base}>
        <Redirect to={Links.Public.login} />
      </Route>
    </Switch>
  );
}

export default withRouter(Public);
