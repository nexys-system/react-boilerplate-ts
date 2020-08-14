import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import * as Data from '../../interface/login/logout';

export default () => {
  useEffect(() => {
    Data.logout();
  }, []);

  return <Redirect to="/" />;
};
