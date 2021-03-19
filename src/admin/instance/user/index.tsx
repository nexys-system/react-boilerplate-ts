import React from 'react';

import * as TC from '@nexys/material-components/dist/crud-simple/type';
import { Uuid, Id } from '@nexys/material-components/dist/common/type';
import { BusinessModule } from '@nexys/material-components';

import * as Links from 'common/link';
import {
  dataInterface,
  permissionsInterface,
  statusList,
  updateStatus,
  // fileList,
  userAuthenticationDataInterface
} from './data';

type U = BusinessModule.User.Type.User;

const extra = (instanceUuid: Uuid): TC.ExtraUnit<U>[] => [
  {
    title: 'Status',
    Component: (_uuid: Uuid | Id, data: U) => (
      <BusinessModule.User.Status
        user={data}
        pList={statusList}
        update={updateStatus}
      />
    )
  },
  {
    title: 'Authentication Methods',
    Component: (uuid: Uuid | Id) => (
      <BusinessModule.User.Authentications
        dataInterface={userAuthenticationDataInterface}
        urlPrefix={`/ux/user/${uuid}/detail`}
      />
    )
  },
  {
    title: 'Access Control',
    tab: 'Access-Control',
    width: { xs: 12, sm: 12, md: 12, lg: 12 },
    Component: uuid => (
      <BusinessModule.User.Permissions<Uuid, Uuid>
        uuid={String(uuid)}
        permissionInterface={permissionsInterface(instanceUuid)}
      />
    )
  }
  // {
  //   tab: 'Files',
  //   title: 'Files',
  //   Component: uuid => (
  //     <BusinessModule.User.Files uuid={String(uuid)} dataLoad={fileList} />
  //   )
  // }
];

interface Props {
  uuid: Uuid;
}

export default ({ uuid }: Props) => (
  <BusinessModule.User.Crud
    urlPrefix={`${Links.SuperAdmin.instance}/${uuid}/Users`}
    dataInterface={dataInterface}
    extra={extra(uuid)}
  />
);

// export default () => <p>Users</p>;
