import {
  Id,
  UOptionSet,
  Uuid
} from '@nexys/material-components/dist/common/type';

export type Instance = UOptionSet & {
  dateAdded: Date;
};

export interface Address {
  street: string;
  city: string;
  zip: string;
  //country: OptionSet
}

export interface Property extends Address {
  uuid: Uuid;
  categoryId: Id;
  typeId: Id;
  statusId: Id;
  purchasePrice: number;
  sharePrice: number;
}

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

export interface Investor {
  uuid: Uuid;
  phone?: string;
  company?: string;
  iban?: string;
  bic?: string;
  user: { uuid: Uuid } | User;
}

export interface Transaction {
  uuid: Uuid;
  property: { uuid: Uuid } | Property;
  user: { uuid: Uuid } | Investor;
  amount: number;
  date: string;
  typeId: number;
}

export interface TenantRent {
  uuid: Uuid;
  tenantProperty: { uuid: Uuid } | TenantProperty;
  statusId: number;
}

export interface InvestorProperty {
  uuid: Uuid;
  user: { uuid: Uuid } | Investor;
  property: { uuid: Uuid } | Property;
  n_shares: number;
}

export interface Tenant {
  uuid: Uuid;
  phone: string;
  user: { uuid: Uuid } | User;
}

export interface Referral {
  uuid: Uuid;
  user: { uuid: Uuid } | Investor;
  email: string;
  logDateAdded: Date;
  statusId: number;
}

export interface TenantProperty {
  uuid: Uuid;
  tenant: { uuid: Uuid } | Tenant;
  property: { uuid: Uuid } | Property;
  rent: number;
  dateStart: Date;
  dateEnd?: Date;
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
  // permission: { uuid: Uuid } | Permission;
  // logUser: { uuid: Uuid } | User;
  // logDateAdded: string;
  permissionInstance: { uuid: Uuid } | PermissionInstance;
}

export interface Maintenance {
  uuid: Uuid;
  property: { uuid: Uuid } | Property;
  tenancy?: { uuid: Uuid } | TenantProperty;
  subject: string;
  type: { id: Id } | MaintenanceType;
  priorityId: number;
  description?: string;
  statusId: number;
}

export interface MaintenanceType {
  id: Id;
  name: string;
}
