import { Stateful } from '@nexys/material-components';

import { withBackend } from 'config';
import * as MockData from './mock-data';
import * as T from './type';

export const login = async (data: Partial<T.User>): Promise<boolean> => {
  if (!withBackend) {
    Stateful.Credentials.set(
      MockData.profile,
      MockData.permissions,
      MockData.locale.name
    );

    return Promise.resolve(true);
  }

  const re = await Stateful.Request.post('/login', data);
  Stateful.Credentials.set(re.profile, re.permissions, re.locale.name);

  return true;
};

export const logout = (): Promise<boolean> => {
  if (!withBackend) {
    return Promise.resolve(true);
  }

  return Stateful.Request.get('/login/logout');
};

export const signUp = (data: T.User): Promise<boolean> => {
  if (!withBackend) {
    return Promise.resolve(true);
  }

  return Stateful.Request.post('/login/signup', data);
};
