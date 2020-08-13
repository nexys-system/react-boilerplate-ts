import React from 'react';

import {
  ExitToApp as LogoutIcon,
  Person as UserIcon
} from '@material-ui/icons';

import { UI, Utils } from '@nexys/material-components';

const {
  Nav: { Top }
} = UI;

const useStyles = Utils.makeStyles(theme => ({
  appBar: {
    backgroundColor: theme.palette.primary.main
  }
}));

export default (props: { isOpen: boolean; onToggle: any }) => {
  const { isOpen, onToggle } = props;
  const title = 'Boilerplate';
  const menus = [
    { link: '/app/profile', Icon: UserIcon },
    { link: '/logout', Icon: LogoutIcon }
  ];
  const classes = useStyles();

  return (
    <Top
      title={title}
      menus={menus}
      isOpen={isOpen}
      onToggle={onToggle}
      className={classes.appBar}
    />
  );
};
