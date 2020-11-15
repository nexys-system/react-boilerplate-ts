import * as T from './type';
import * as ProfileMock from '../profile/mock-data';
import { Stateful } from '@nexys/material-components';

const mockLoginResponse = {
  profile: ProfileMock.profile,
  permissions: ['app', 'anotherpermission'],
  lang: 'en'
};

export const authenticate = async (
  user: T.LoginInput
): Promise<T.LoginResponse> => {
  // here send the data to the backend and wait for output

  if (user.email !== 'john@doe.com') {
    return Promise.reject({ errors: { email: ['my uuid'] } });
  }

  const { profile, permissions, lang } = await Promise.resolve(
    mockLoginResponse
  );

  Stateful.Credentials.set(profile, permissions, lang);

  return { uuid: 'myuuid' };
};
