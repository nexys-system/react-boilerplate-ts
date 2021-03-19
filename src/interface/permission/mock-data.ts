import * as CT from 'interface/crud/config';
import * as T from './type';

export const data: CT.Permission[] = [
  {
    uuid: 'uuid1',
    name: 'app'
  },
  {
    uuid: 'uuid2',
    name: 'admin'
  }
];

export const permissionInstances: T.PermissionInstanceCrud[] = [
  {
    uuid: 'uuid1',
    permission: { uuid: 'uuid1' },
    instance: { uuid: 'uuid1' }
  },
  {
    uuid: 'uuid2',
    permission: { uuid: 'uuid2' },
    instance: { uuid: 'uuid1' }
  }
];

export const userPermissions: T.UserPermissionCrud[] = [
  {
    uuid: 'uuid1',
    name: 'App',
    PermissionInstance: [
      {
        uuid: 'uuid1'
      } as CT.PermissionInstance
    ]
  }
];
