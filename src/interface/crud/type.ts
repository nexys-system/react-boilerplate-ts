import {
  Id,
  UOptionSet,
  Uuid
} from '@nexys/material-components/dist/common/type';

export type Instance = UOptionSet & {
  dateAdded: Date;
};

export interface UserStatus {
  id: Id;
}

export interface User {
  uuid: Uuid;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  status: { id: Id } | UserStatus;
  logDateAdded: string;
  instance: { uuid: Uuid } | Instance;
}

export interface File {
  uuid: Uuid;
  name: string;
  contentType: string;
}

export type Permission = UOptionSet;

export interface PermissionInstance {
  uuid: Uuid;
  instance: { uuid: Uuid } | Instance;
  permission: { uuid: Uuid } | Permission;
  logUser: { uuid: Uuid } | User;
  logDateAdded: string;
}

export interface UserPermission {
  uuid: Uuid;
  user: { uuid: Uuid } | User;
  permissionInstance: { uuid: Uuid } | PermissionInstance;
}
