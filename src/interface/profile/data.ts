import { Stateful } from '@nexys/material-components';
import { withBackend } from 'config';

import * as UserService from 'interface/user/data';
import { Profile } from './type';
import * as Mock from './mock-data';

const {
  RequestUtil: {
    Wrapper: { RequestWrapper }
  }
} = Stateful;

export const detail = async (): Promise<Profile> => {
  if (!withBackend) {
    return new Promise(r => r(Mock.profile));
  }

  return RequestWrapper(Stateful.Request.get('/profile'));
};

export const update = async (data: Profile): Promise<boolean> => {
  if (!withBackend) {
    console.log('profile update', data);
    return Promise.resolve(true);
  }

  return UserService.update(data);
};

export const passwordUpdate = (
  oldPassword: string,
  newPassword: string
): Promise<boolean> => {
  if (!withBackend) {
    console.log('password update', oldPassword, newPassword);
    return Promise.resolve(true);
  }

  return RequestWrapper(
    Stateful.Request.post('/profile/password/change', {
      old: oldPassword,
      password: newPassword
    })
  );
};
