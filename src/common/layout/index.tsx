import React from 'react';

import Grid from '@material-ui/core/Grid';
import Title from 'common/title';

const Layout = (props: { title: string; children: any }): JSX.Element => {
  return (
    <>
      <Grid item xs={6}>
        <Title title={props.title} type="pageTitle" />
      </Grid>
      {props.children}
    </>
  );
};

export default Layout;
