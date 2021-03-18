import React from 'react';

// Icon import
import Dashboardicon from '@material-ui/icons/Dashboard';
// end icon

import { UI, Stateful, Utils } from '@nexys/material-components';
import * as Link from 'common/link';

const useStyles = Utils.makeStyles(theme => ({
  drawer: {
    backgroundColor: theme.palette.primary.main,
    paddingTop: theme.spacing(8)
  },
  menuItem: {
    color: `${theme.palette.primary.contrastText} !important`
  },
  label: {
    color: 'white'
  }
}));

interface TMenu {
  link: string;
  label: React.ReactNode;
  Icon: any;
  permission: string;
}

const {
  Nav: {
    Left: { Drawer, Menu, Divider }
  }
} = UI;

const Label = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const classes = useStyles();

  return <span className={classes.label}>{children}</span>;
};

const listMain: TMenu[] = [
  {
    link: Link.App.dashboard,
    label: <Label>Dashboard</Label>,
    Icon: Dashboardicon,
    permission: 'app'
  }
];

export default () => {
  const classes = useStyles();

  // list of permissions from profile
  const permissions =
    Stateful.Credentials.getPermissions().sort((a: string, b: string) => {
      if (a < b) {
        return -1;
      }

      if (a > b) {
        return 1;
      }

      return 0;
    }) || [];

  return (
    <Drawer
      isOpen={true}
      onClose={() => {}}
      classNames={{ paper: classes.drawer }}
      hideToggleButton={true}
    >
      <Divider />
      <Menu
        list={listMain.filter(x => permissions.includes(x.permission))}
        classNames={{ icon: classes.menuItem, item: classes.menuItem }}
      />
    </Drawer>
  );
};
