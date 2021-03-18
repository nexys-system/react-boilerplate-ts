import React from 'react';
import Divider from '@material-ui/core/Divider';
import { useHistory } from 'react-router-dom';

import { Field } from '@nexys/material-components/dist/simple-ui/form-simple/type';
import { SimpleUI, UI, Utils } from '@nexys/material-components';

import { appTitle } from 'config';
import * as Links from 'common/link';
import * as T from 'interface/login/type';
import * as Data from 'interface/login/data';
import { Error, ExtraContent } from './partials';

const useStyles = Utils.makeStyles(theme => ({
  container: {
    maxWidth: '400px',
    margin: '0 auto'
  },
  divider: {
    margin: theme.spacing(4, 0)
  },
  linkContainer: {
    textAlign: 'center'
  }
}));

const { Layout, Link } = UI;

const Login = (): JSX.Element => {
  const classes = useStyles();
  const history = useHistory();

  const fields: Field<T.User>[] = [
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

  const initialValues: T.User = {
    email: '',
    password: ''
  };

  const handleLogin = (data: any) => {
    return Data.login(data).then(r => {
      history.push(Links.App.dashboard);
    });
  };

  return (
    <Layout.Login
      title={`Login to ${appTitle}`}
      layout="left"
      otherContent={<ExtraContent />}
    >
      <div className={classes.container}>
        <Error name="notifLogout">You were successfully logged out.</Error>
        <Error name="sessionExpired">
          Your session expired. Please login again to continue where you left
          off.
        </Error>

        <SimpleUI.FormSimple<T.User>
          data={initialValues}
          fields={fields}
          promise={handleLogin}
          submitLabel="Login"
          message={{
            success: 'Logged in successfully',
            error: 'Error while trying to login'
          }}
        />

        <Divider className={classes.divider} />

        <div className={classes.linkContainer}>
          <Link to={Links.Public.forgotYourPassword}>
            Forgot Your Password?
          </Link>
        </div>
      </div>
    </Layout.Login>
  );
};

export default Login;
