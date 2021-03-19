import React from 'react';

import * as TC from '@nexys/material-components/dist/crud-simple/type';
import {
  Crud,
  Permissions,
  Type
} from '@nexys/material-components/dist/business-module/instance';
import { Id, Uuid } from '@nexys/material-components/dist/common/type';

import * as Links from 'common/link';
import * as Data from 'interface/instance/data';
import * as DataPermissionInstance from 'interface/permission/instance';
import User from './user';

const dataInterface: TC.DataInterface<Type.Instance> = {
  list: Data.list,
  detail: Data.detail,
  insert: Data.insert,
  update: Data.update,
  deleteById: Data.deleteById
};

export const permissionsInterface = (uuid: Uuid) => ({
  list: () => DataPermissionInstance.listAssign(uuid),
  toggle: DataPermissionInstance.toggle
});

const extra: TC.ExtraUnit<Type.Instance>[] = [
  {
    tab: 'Users',
    width: { xs: 12, sm: 12, md: 12, lg: 12 },
    Component: (uuid: string | number) => <User uuid={String(uuid)} />,
    paper: false
  },
  {
    tab: 'Permissions',
    title: 'Permissions associated with Instance',
    width: { xs: 12, sm: 12, md: 12, lg: 12 },
    Component: (uuid: Uuid | Id) => (
      <Permissions<Uuid, Uuid>
        uuid={String(uuid)}
        permissionInterface={permissionsInterface(String(uuid))}
      />
    )
  }
];

export default () => (
  <Crud
    urlPrefix={Links.SuperAdmin.instance}
    dataInterface={dataInterface}
    extra={extra}
  />
);
