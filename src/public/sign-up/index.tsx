import React, { useState } from 'react';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import { Field } from '@nexys/material-components/dist/simple-ui/form-simple/type';
import { SimpleUI, UI, Utils } from '@nexys/material-components';

import { appTitle } from 'config';
import * as Links from 'common/link';
import * as T from 'interface/login/type';
import * as Data from 'interface/login/data';
import { ExtraContent } from './partials';

const useStyles = Utils.makeStyles(theme => ({
  container: {
    maxWidth: '400px',
    margin: '0 auto'
  },
  message: {
    textAlign: 'center'
  },
  link: {
    color: theme.palette.secondary.main
  },
  intro: {
    marginTop: theme.spacing(-2),
    textAlign: 'center',

    '& strong': {
      color: theme.palette.secondary.main
    }
  },
  linkContainer: {
    textAlign: 'center'
  },
  divider: {
    margin: theme.spacing(4, 0)
  }
}));

const { Layout, Link } = UI;

const Login = (): JSX.Element => {
  const [state, setState] = useState<'default' | 'signUp'>('default');
  const classes = useStyles();

  const fields: Field<T.SignUpUser>[] = [
    {
      label: 'First Name',
      name: 'firstName',
      type: 'string'
    },
    {
      label: 'Last Name',
      name: 'lastName',
      type: 'string'
    },
    {
      label: 'Email Address',
      name: 'email',
      type: 'string'
    },
    {
      label: 'Password',
      name: 'password',
      type: 'string',
      ux: 'password'
    }
  ];

  const initialValues: T.SignUpUser = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  const handleSignUp = (data: any) => {
    return Data.signUp(data).then(r => {
      setState('signUp');
      return true;
    });
  };

  return (
    <Layout.Login
      title="Create Your Account"
      layout="left"
      otherContent={<ExtraContent />}
    >
      <div className={classes.container}>
        {state === 'signUp' ? (
          <Typography className={classes.message}>
            You signed up successfully.{' '}
            <Link to={Links.Public.login} className={classes.link}>
              Login here
            </Link>
          </Typography>
        ) : (
          <>
            <Typography className={classes.intro}>
              to join <strong>{appTitle}</strong>
            </Typography>
            <SimpleUI.FormSimple<T.SignUpUser>
              data={initialValues}
              fields={fields}
              promise={handleSignUp}
              submitLabel="Sign Up"
              message={{
                success: 'Signed up successfully',
                error: 'Error while trying to sign up'
              }}
            />
            <Divider className={classes.divider} />

            <div className={classes.linkContainer}>
              <Link to={Links.Public.login}>Back to Login</Link>
            </div>
          </>
        )}
      </div>
    </Layout.Login>
  );
};

export default Login;
