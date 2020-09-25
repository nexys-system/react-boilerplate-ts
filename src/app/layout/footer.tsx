import React from 'react';
import { Typography, Link } from '@material-ui/core';
import { Utils } from '@nexys/material-components';
import { appTitle } from 'config/index';

const useStyles = Utils.makeStyles(theme => ({
  footer: {
    padding: theme.spacing(2)
  }
}));

const gitsha: string = process.env.REACT_APP_GIT_SHA || 'GIT SHA';
const gitshaLink:string = 'https://github.com/nexys-system/react-boilerplate-ts/commit/' + gitsha;

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="body2" color="textSecondary" align="center">
        Copyright ©{' '}
        <Link color="inherit" href="">
          {appTitle}
        </Link>
        {` ${new Date().getFullYear()}`}
        <br />
        <small><a href={gitshaLink}>{gitsha}</a></small>
      </Typography>
    </footer>
  );
};

export default Footer;
