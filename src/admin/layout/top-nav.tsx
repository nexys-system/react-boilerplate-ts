import React from 'react';
import useTheme from '@material-ui/core/styles/useTheme';
import UserIcon from '@material-ui/icons/Person';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import AppsIcon from '@material-ui/icons/Apps';

import { UI, Utils } from '@nexys/material-components';
import * as Links from 'common/link';
import { appTitle } from 'config';

const {
  Nav: { Top }
} = UI;

const useStyles = Utils.makeStyles(theme => ({
  appBar: {
    backgroundColor: theme.palette.background.paper
    // boxShadow: 'none'
  }
}));

export default () => {
  const theme = useTheme();
  const classes = useStyles();

  const menus = [
    { link: Links.App.dashboard, Icon: AppsIcon },
    { link: Links.Admin.profile, Icon: UserIcon },
    { link: Links.Public.logout, Icon: LogoutIcon }
  ];

  return (
    <Top
      title={appTitle}
      menus={menus}
      className={classes.appBar}
      isOpen
      textColor={theme.palette.primary.main}
    />
  );
};
