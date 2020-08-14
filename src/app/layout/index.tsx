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
    flexGrow: 1,
    overflow: 'auto'
  },
  main: {
    minHeight: `calc(100vh - 72px)` // we need to subtract the height of footer
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  }
}));

interface Props {
  children: JSX.Element | JSX.Element[];
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

      <div className={classes.content}>
        <main className={classes.main}>
          <div className={classes.appBarSpacer} />

          <Container maxWidth="lg" className={classes.container}>
            {children}
          </Container>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default Layout;
