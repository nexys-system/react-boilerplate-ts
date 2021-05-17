import React from 'react';

import { BusinessModule } from '@nexys/material-components';
import { withBackend } from 'config';
import * as Links from 'common/link';

const UserManagement = (): JSX.Element => (
  <BusinessModule.Admin
    urlPrefix={Links.Admin.base}
    withBackend={withBackend}
  />
);

export default UserManagement;
