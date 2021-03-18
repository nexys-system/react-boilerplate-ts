import React from 'react';
import Typography from '@material-ui/core/Typography';

import { UI } from '@nexys/material-components';

const { Layout } = UI;

const Dashboard = (): JSX.Element => {
  return (
    <Layout.Simple title="Dashboard">
      <Typography>You're ready to go</Typography>
    </Layout.Simple>
  );
};

export default Dashboard;
