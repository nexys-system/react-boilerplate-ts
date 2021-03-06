import * as CT from 'interface/crud/config';

export type PermissionInstanceCrud = Omit<
  CT.PermissionInstance,
  'logDateAdded' | 'logUser'
>;

export type UserPermissionCrud = Pick<CT.Permission, 'uuid' | 'name'> & {
  PermissionInstance?: CT.PermissionInstance[];
};
