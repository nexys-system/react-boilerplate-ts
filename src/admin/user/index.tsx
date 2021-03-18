import React from 'react';
import { Route } from 'react-router-dom';

import { Id, Uuid } from '@nexys/utils/dist/types';
import * as T from '@nexys/material-components/dist/crud-simple/type';
import { BusinessModule, UI } from '@nexys/material-components';

import * as Links from 'common/link';
import * as Data from 'interface/user/data';
import * as UT from 'interface/user/type';
import * as DataPermission from 'interface/user/permission';

const { Layout } = UI;

const permissionInterface = {
  list: (uuid: Uuid) => DataPermission.list(uuid as Uuid) as any,
  toggle: (uuid: Uuid, id: Uuid, assigned: boolean) =>
    DataPermission.toggle(uuid, id, assigned)
};

const dataInterface: T.DataInterface<UT.User> = {
  list: Data.list,
  detail: Data.detail,
  insert: Data.insert,
  update: Data.update,
  deleteById: Data.deleteById
};

const extra = (): T.ExtraUnit<UT.User>[] => [
  {
    title: 'Status',
    Component: (_uuid: Uuid | Id, data: UT.User) => (
      <BusinessModule.User.Status
        user={data}
        pList={Data.statusList()}
        update={Data.statusUpdate}
      />
    )
  },
  {
    title: 'Permissions',
    tab: 'access-control',
    width: { xs: 12, sm: 6, md: 6, lg: 6 },
    Component: (uuid: Uuid | Id) => (
      <BusinessModule.User.Permissions<Uuid, Uuid>
        permissionInterface={permissionInterface}
        uuid={String(uuid)}
      />
    )
  }
];

export default () => (
  <>
    <Route exact path={Links.Admin.user}>
      <Layout.Title title="Users" type="pageTitle" />
    </Route>

    <BusinessModule.User.Crud
      dataInterface={dataInterface}
      urlPrefix={Links.Admin.user}
      extra={extra()}
    />
  </>
);
