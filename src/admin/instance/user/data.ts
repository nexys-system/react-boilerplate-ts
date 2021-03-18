import * as UserManagement from '@nexys/material-components/dist/business-module/user';
import * as TC from '@nexys/material-components/dist/crud-simple/type';
import { Id, Uuid } from '@nexys/material-components/dist/common/type';

import * as Data from 'interface/user/data';
import * as DataPermission from 'interface/user/permission';
import * as DataFile from 'interface/file/data';

export const dataInterface: TC.DataInterface<UserManagement.Type.User> = {
  list: Data.list,
  detail: Data.detail,
  insert: Data.insert,
  update: Data.update,
  deleteById: Data.deleteById
};

export const permissionsInterface = {
  list: DataPermission.list,
  toggle: DataPermission.toggle
};

export const statusList = Data.statusList();

export const updateStatus = Data.statusUpdate;

export const fileList = (uuid: Uuid | Id) => DataFile.listByUser(String(uuid));

export const userAuthenticationDataInterface: TC.DataInterface<UserManagement.Type.AuthenticationMethod> = {
  list: () => Promise.resolve([]),
  detail: (id: Id | Uuid) => {
    // const item = F.authenticationMethods.find(i => i.id === Number(id));
    // return Promise.resolve(item || F.authenticationMethods[0]);
    return Promise.resolve({} as any);
  },
  insert: (
    data: Omit<UserManagement.Type.AuthenticationMethod, 'id' | 'uuid'>
  ) => Promise.resolve({ id: 1 }),
  update: d => Promise.resolve(true),
  deleteById: d => Promise.resolve(true)
};
