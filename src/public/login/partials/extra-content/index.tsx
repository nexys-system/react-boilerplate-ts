import React from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';

import { UI, Utils } from '@nexys/material-components';
import * as Links from 'common/link';

const useStyles = Utils.makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(-3)
  },
  contentContainer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4),
    width: '60%'
  },
  title: {
    color: theme.palette.secondary.main,
    fontSize: theme.typography.h5.fontSize,
    marginBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2)
  },
  titleContainer: {
    textAlign: 'center'
  },
  icon: {
    color: theme.palette.success.main
  },
  divider: {
    margin: theme.spacing(4, 'auto'),
    maxWidth: '90%'
  },
  linkContainer: {
    textAlign: 'center'
  },
  link: {
    color: theme.palette.secondary.main
  }
}));

const { Link } = UI;

const ExtraContent = (): JSX.Element => {
  const classes = useStyles();

  const benefits: string[] = [
    'Lorem ipsum dolor sit amet',
    'Nulla orci urna, feugiat convallis iaculis non',
    'Maecenas sagittis blandit ex, sed condimentum'
  ];

  return (
    <div className={classes.container}>
      <div className={classes.contentContainer}>
        <div className={classes.titleContainer}>
          <Typography component="h2" className={classes.title}>
            Join the community
          </Typography>
        </div>

        {benefits.map((b, i) => (
          <List key={`benefit-${i}`}>
            <ListItem>
              <ListItemIcon>
                <CheckIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText>{b}</ListItemText>
            </ListItem>
          </List>
        ))}

        <Divider className={classes.divider} />

        <div className={classes.linkContainer}>
          <Typography>
            Don't have an account yet?{' '}
            <Link to={Links.Public.signUp} className={classes.link}>
              Sign up now
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ExtraContent;
