import * as BT from '@nexys/material-components/dist/business-module/user/type';
import { Uuid } from '@nexys/material-components/dist/common/type';
import * as Crud from '@nexys/react-stateful/dist/request';

import { withBackend } from 'config';
import * as CT from 'interface/crud/type';

const CPermissionInstance = new Crud.Crud.CrudRequest<
  Omit<CT.PermissionInstance, 'logDateAdded' | 'logUser'>
>('PermissionInstance', '/crud/query/admin', '/crud/mutate/admin');
const C = new Crud.Crud.CrudRequest<
  Omit<CT.UserPermission, 'logDateAdded' | 'logUser'>
>('UserPermission', '/crud/query/admin', '/crud/mutate/admin');

export const list = async (
  userUuid: Uuid,
  instanceUuid: Uuid
): Promise<BT.UserPermission<Uuid>[]> => {
  if (!withBackend) {
    return Promise.resolve([]);
  }

  const params = {
    projection: {
      uuid: true,
      permission: {
        id: true,
        name: true
      }
    },
    filters: {
      instance: { uuid: instanceUuid }
    },
    references: {
      UserPermission: {
        projection: { uuid: true },
        filters: { user: { uuid: userUuid } }
      }
    }
  };

  const d = await CPermissionInstance.list<
    Pick<CT.PermissionInstance, 'uuid'> & {
      permission: Pick<CT.Permission, 'uuid' | 'name'>;
      UserPermission?: CT.UserPermission[];
    }
  >(params);

  return d
    .map(a => ({
      id: a.uuid,
      name: a.permission.name,
      assigned: a.UserPermission && a.UserPermission[0].uuid
    }))
    .sort((a, b) => (a.name > b.name ? 1 : -1));
};

const insert = async (
  userUuid: Uuid,
  permissionInstanceUuid: Uuid,
  instanceUuid: Uuid
): Promise<boolean> => {
  if (!withBackend) {
    return Promise.resolve(true);
  }

  const detail = await CPermissionInstance.detail({
    uuid: permissionInstanceUuid
  });

  if (!detail) {
    throw Error('Permission could not be found');
  }

  const data = {
    permissionInstance: {
      uuid: permissionInstanceUuid,
      instance: { uuid: instanceUuid }
    },
    user: { uuid: userUuid },
    permission: { uuid: detail.permission.uuid }
  };

  try {
    await C.detail(data);
    return true;
  } catch (error) {
    return C.insert(data).then(_x => true);
  }
};

export const deletePermission = async (
  userUuid: Uuid,
  permissionInstanceUuid: Uuid,
  instanceUuid: Uuid
): Promise<boolean> => {
  if (!withBackend) {
    return Promise.resolve(true);
  }

  const filters = {
    permissionInstance: {
      uuid: permissionInstanceUuid,
      instance: { uuid: instanceUuid }
    },
    user: { uuid: userUuid }
  };

  return C.delete(filters).then(_x => false);
};

export const toggle = async (
  userUuid: Uuid,
  permissionInstanceUuid: Uuid,
  assigned: boolean,
  instanceUuid: Uuid
) => {
  if (!withBackend) {
    return Promise.resolve(true);
  }

  if (!!assigned) {
    return deletePermission(
      String(userUuid),
      permissionInstanceUuid,
      instanceUuid
    );
  }

  return insert(String(userUuid), permissionInstanceUuid, instanceUuid);
};
