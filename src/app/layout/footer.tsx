import React from 'react';
import { Typography, Link } from '@material-ui/core';
import { Utils } from '@nexys/material-components';

const useStyles = Utils.makeStyles(theme => ({
  footer: {
    padding: theme.spacing(2)
  }
}));

const gitsha: string = process.env.REACT_APP_GIT_SHA || 'GIT SHA';

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="body2" color="textSecondary" align="center">
        Copyright ©{' '}
        <Link color="inherit" href="">
          BPMS MDM
        </Link>
        {` ${new Date().getFullYear()}`}
        <br />
        <small>{gitsha}</small>
      </Typography>
    </footer>
  );
};

export default Footer;
