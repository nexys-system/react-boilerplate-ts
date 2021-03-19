// This code was generated automatically via the Nexys platform on Fri Mar 19 2021 16:33:53 GMT+0100 (Central European Standard Time), do not alter, regenerate if needed

export interface User {
  uuid: string;
  firstName: string;
  lastName: string;
  email: string;
  status: { id: number } | UserStatus;
  logDateAdded: Date;
  instance: { uuid: string } | Instance;
}

export interface UserStatus {
  id: number;
  name: string;
}

export interface Instance {
  uuid: string;
  name: string;
  dateAdded: Date;
}

export interface Permission {
  uuid: string;
  name: string;
}

export interface UserPermission {
  uuid: string;
  permissionInstance: { uuid: string } | PermissionInstance;
  user: { uuid: string } | User;
}

export interface PermissionInstance {
  uuid: string;
  instance: { uuid: string } | Instance;
  permission: { uuid: string } | Permission;
}

export const entities = [];
