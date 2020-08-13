import React from 'react';
import { Typography, Link } from '@material-ui/core';

const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    Copyright ©{' '}
    <Link color="inherit" href="">
      Nexys Boilerplate
    </Link>
    {` ${new Date().getFullYear()}`}
  </Typography>
);

export default Copyright;
