import { OptionSet, Uuid } from '@nexys/material-components/dist/common/type';
import * as T from './type';

export const statuses: OptionSet[] = [
  {
    id: T.Status.pending,
    name: 'Pending'
  },
  {
    id: T.Status.active,
    name: 'Active'
  },
  {
    id: T.Status.inactive,
    name: 'Inactive'
  }
];

export const postProcessing = (item: T.UserCrud): T.User => {
  const status = statuses.filter(x => x.id === item.status.id)[0];

  return {
    ...item,
    status,
    instance: {
      uuid: item.instance.uuid,
      name: ''
    }
  };
};

/**
 * takes output from the query service and formats for assigned business object
 */
export const formatAssigned = (
  input: {
    uuid: Uuid;
    name: string;
    PermissionInstance?: {
      uuid: Uuid;
      UserPermission?: { uuid: Uuid }[];
    }[];
  }[]
): T.UserPermission[] => {
  return input.map(ip => {
    const assigned: string | undefined =
      ip.PermissionInstance &&
      ip.PermissionInstance.length &&
      ip.PermissionInstance[0].UserPermission &&
      ip.PermissionInstance[0].UserPermission.length
        ? ip.PermissionInstance[0].UserPermission[0].uuid
        : undefined;

    return {
      id: ip.uuid,
      name: ip.name,
      assigned
    };
  });
};
