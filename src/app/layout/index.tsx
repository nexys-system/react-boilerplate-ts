import React from 'react';
// import makeStyles from '@material-ui/core/styles/makeStyles';
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
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto'
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  }
}));

interface Props {
  children: JSX.Element;
}

function Layout(props: Props) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const { children } = props;

  return (
    <div className={classes.root}>
      <CssBaseline />

      <TopNav isOpen={open} onToggle={() => setOpen(!open)} />
      <LeftNav isOpen={open} onClose={() => setOpen(false)} />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />

        <Container maxWidth="lg" className={classes.container}>
          {children}
        </Container>

        <Footer />
      </main>
    </div>
  );
}

export default Layout;
