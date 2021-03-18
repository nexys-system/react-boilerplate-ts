import React from 'react';

import * as T from '@nexys/material-components/dist/crud-simple/type';
import { Type } from '@nexys/material-components/dist/business-module/permission';
import { BusinessModule } from '@nexys/material-components';

import * as Links from 'common/link';
import * as Data from 'interface/permission/data';

const dataInterface: T.DataInterface<Type.Permission> = {
  list: Data.list as any,
  detail: Data.detail as any,
  insert: Data.insert as any,
  update: Data.update,
  deleteById: Data.deleteById
};

export default () => {
  const urlPrefix = Links.SuperAdmin.permission;

  return (
    <BusinessModule.Permission.Crud
      dataInterface={dataInterface}
      urlPrefix={urlPrefix}
    />
  );
};
