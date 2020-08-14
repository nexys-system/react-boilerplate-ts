import React from 'react';

import {
  Dashboard as DashboardIcon,
  Build as CrudIcon,
  Block as UnauthorizedPage
} from '@material-ui/icons';

import { UI } from '@nexys/material-components';

import * as Link from 'common/link';

const {
  Nav: {
    Left: { Drawer, Menu }
  }
} = UI;

interface TMenu {
  link: string;
  label: string;
  Icon: any;
  permission?: string;
}

const listMain: TMenu[] = [
  {
    link: Link.App.dashboard,
    label: 'Dashboard',
    Icon: DashboardIcon
  },
  {
    link: Link.App.crud,
    label: 'Crud',
    Icon: CrudIcon
  },
  {
    link: Link.App.unauthorizedPage,
    label: 'Unauthorized Page',
    Icon: UnauthorizedPage
  }
];

export default (props: { isOpen: boolean; onClose: any }) => {
  const { isOpen, onClose } = props;

  // list of permissions from profile
  //const permissions = Stateful.Credentials.getPermissions() || [];
  //listMain /*.filter(x => permissions.includes(x.permission))*/

  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <Menu list={listMain} />
    </Drawer>
  );
};
