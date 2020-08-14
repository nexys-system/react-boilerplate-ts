import React from 'react';
import { useHistory } from 'react-router-dom';
import { Stateful, UI } from '@nexys/material-components';

import { REDIRECT_URI } from 'common/auth/wrapper';

export default () => {
  const history = useHistory();
  return (
    <UI.Layout.Login title={'Unauthorized'}>
      <h2>Unauthorized</h2>
      <p>
        The page you were trying to access requires permissions that your
        profile does not have. Get in touch with your administrator.
      </p>

      <p>
        The page you were trying to access:{' '}
        <code>{Stateful.Store.get(REDIRECT_URI)}</code>
      </p>

      <ul>
        <li>
          <UI.Button onClick={() => history.goBack()} label={'Back'} />
        </li>
        <li>
          <UI.Link to={'/login'}>Login</UI.Link>
        </li>
      </ul>
    </UI.Layout.Login>
  );
};
