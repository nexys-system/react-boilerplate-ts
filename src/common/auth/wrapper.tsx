import React from 'react';
import { Redirect, RouteComponentProps } from 'react-router-dom';

import { Stateful } from '@nexys/material-components';

export const REDIRECT_URI = 'redirectUri';

export default (
  App: (props: RouteComponentProps) => JSX.Element,
  permission: string
) => (props: RouteComponentProps) => {
  const permissions = Stateful.Credentials.getPermissions();

  const path = props.location.pathname;

  // user not authenticated
  if (!permissions) {
    Stateful.Store.set(REDIRECT_URI, path);
    return <Redirect to={'/login'} />;
  }

  // user unauthorized
  if (!permissions.includes(permission)) {
    Stateful.Store.set(REDIRECT_URI, path);
    return <Redirect to={'/unauthorized'} />;
  }

  return <App {...props} />;
};
