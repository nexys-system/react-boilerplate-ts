import React from 'react';
import { Redirect } from 'react-router-dom';
import { UI } from '@nexys/material-components';

import * as T from 'interface/login/type';
import * as D from 'interface/login';

const { Layout, Business } = UI;

export default () => {
  const [redirect, setRedirect] = React.useState<string | undefined>(undefined);

  if (redirect) {
    return <Redirect to={redirect} />;
  }

  return (
    <Layout.Login title={'Boilerplate'}>
      <Business.Login.Error name="notifLogout">
        You were successfully logged out.
      </Business.Login.Error>

      <Layout.Title title={'Login to Nexys'} type="groupTitle" />

      <p>
        <small>
          <i>
            enter <code>john@doe.com</code> as email
          </i>
        </small>
      </p>

      <Business.Login.Login<T.LoginResponse>
        onSuccess={(r: T.LoginResponse) => {
          //alert(`form submitted and user with uuid "${r.uuid}" found`);
          setRedirect('/app');
        }}
        onSubmit={x => {
          return D.authenticate(x);
        }}
      />
    </Layout.Login>
  );
};
