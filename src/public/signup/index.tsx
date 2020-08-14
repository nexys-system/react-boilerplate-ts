import React from 'react';
import { UI } from '@nexys/material-components';
import * as Link from 'common/link';
export default () => (
  <UI.Layout.Login title={'Signup'}>
    <h2>Signup</h2>
    <p>here signup...</p>

    <p>
      <UI.Link to={Link.Public.login}>to login</UI.Link>
    </p>
  </UI.Layout.Login>
);
