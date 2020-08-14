import { withBackend } from 'config';
//import { Stateful } from '@nexys/material-components';
import { Profile } from './type';
import * as Mock from './mock-data';

export const detail = (): Promise<Profile> => {
  if (!withBackend) {
    return new Promise(r => r(Mock.profile));
  }

  throw Error("in demo mode, there's no backend");
  //return Stateful.Request.post('/profile/detail');
};
