import { OptionSet, Uuid } from '@nexys/material-components/dist/common/type';
import * as CT from 'interface/crud/config';

export type UserCrud = Omit<CT.User, 'password' | 'logDateAdded' | 'lang'>;

export type User = Omit<UserCrud, 'status' | 'instance' | 'lang'> & {
  status: OptionSet;
  instance: Omit<CT.Instance, 'dateAdded'>;
};

export enum Status {
  active = 1,
  inactive = 2,
  pending = 3
}

export type UserPermissionCrud = Omit<
  CT.UserPermission,
  'logUser' | 'logDateAdded'
>;

export interface UserPermission {
  id: Uuid;
  name: string;
  assigned?: Uuid;
}
