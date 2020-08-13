import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import { Stateful } from '@nexys/material-components';
import * as Data from './data';

const { Credentials, Store } = Stateful;

export default () => {
  useEffect(() => {
    Data.logout();
    Credentials.remove();
    Store.remove('token'); // todo move to credentials
    Store.set('notifLogout', true);
  }, []);

  return <Redirect to="/" />;
};
