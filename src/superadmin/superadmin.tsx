import React from 'react';

import { BusinessModule } from '@nexys/material-components';
import * as Links from 'common/link';
import { withBackend } from 'config';
import { entities } from 'interface/crud/config';
import * as MockData from 'interface/crud/mock-data';

const SuperAdmin = (): JSX.Element => (
  <BusinessModule.SuperAdmin
    apiUrl="/crud/query/superadmin"
    entities={entities}
    urlPrefix={Links.SuperAdmin.base}
    withBackend={withBackend}
    mockData={MockData.data}
  />
);

export default SuperAdmin;
