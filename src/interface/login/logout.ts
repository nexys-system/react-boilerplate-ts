import { Stateful } from '@nexys/material-components';

export const logout = (): Promise<true> => {
  Stateful.Credentials.remove();
  Stateful.Store.set('notifLogout', true);
  return Promise.resolve(true);
};
