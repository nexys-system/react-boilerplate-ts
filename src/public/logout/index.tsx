import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import { Stateful } from '@nexys/material-components';

import * as Data from 'interface/login/data';
import * as Links from 'common/link';

const { Credentials, Store } = Stateful;

export default () => {
  useEffect(() => {
    Data.logout();
    Credentials.remove();

    // so we wouldn't show both messages
    if (!Store.get('sessionExpired')) {
      Store.set('notifLogout', true);
    }
  }, []);

  return <Redirect to={Links.Public.base} />;
};
