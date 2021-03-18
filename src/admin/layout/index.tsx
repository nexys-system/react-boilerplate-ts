import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Utils } from '@nexys/material-components';

import TopNav from './top-nav';
import LeftNav from './left-nav';
import Footer from './footer';

const useStyles = Utils.makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1
  },
  main: {
    height: '100%',
    overflow: 'auto'
  },
  container: {
    minHeight: 'calc(100vh - 64px - 72px)', // we need to subtract the height of the topnav and the height of the footer
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  }
}));

interface Props {
  children: React.ReactElement;
}

function Layout(props: Props) {
  const classes = useStyles();

  const { children } = props;

  return (
    <div className={classes.root}>
      <CssBaseline />

      <TopNav />
      <LeftNav />

      <div className={classes.content}>
        <main className={classes.main}>
          <div className={classes.appBarSpacer} />

          <Container maxWidth="lg" className={classes.container}>
            {children}
          </Container>

          <Footer />
        </main>
      </div>
    </div>
  );
}

export default Layout;
