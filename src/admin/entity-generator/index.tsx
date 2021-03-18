import React from 'react';

import EntityGenerator from '@nexys/material-components/dist/entity-generator';

import { withBackend } from 'config';
import * as Links from 'common/link';
import { entities } from 'interface/crud/def';
import * as MockData from 'interface/crud/mock-data';

const MyEntityGenerator = (): JSX.Element => {
  return (
    <EntityGenerator
      entities={entities}
      urlPrefix={Links.SuperAdmin.entity}
      withBackend={withBackend}
      mockData={MockData.data}
    />
  );
};

export default MyEntityGenerator;
