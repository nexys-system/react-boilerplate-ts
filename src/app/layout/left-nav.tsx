import React from 'react';

import {
  Dashboard as DashboardIcon,
  Build as CrudIcon
} from '@material-ui/icons';

import { UI } from '@nexys/material-components';

const {
  Nav: {
    Left: { Drawer, Menu }
  }
} = UI;

interface TMenu {
  link: string;
  label: string;
  Icon: any;
  permission: string;
}

const listMain: TMenu[] = [
  {
    link: '/app/dashboard',
    label: 'Dashboard',
    Icon: DashboardIcon,
    permission: 'dashboard'
  },
  {
    link: '/app/crud',
    label: 'Crud',
    Icon: CrudIcon,
    permission: 'crud'
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
