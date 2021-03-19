import { Uuid } from '@nexys/material-components/dist/common/type';
import { Stateful } from '@nexys/material-components';

import { instanceUuid, withBackend } from 'config';
import * as CT from 'interface/crud/config';
import * as T from './type';
import * as U from './utils';

const C = new Stateful.RequestUtil.Crud.CrudRequest<T.UserPermissionCrud>(
  'UserPermission'
);
const CPermissionInstance = new Stateful.RequestUtil.Crud.CrudRequest<CT.PermissionInstance>(
  'PermissionInstance'
);

export const list = async (
  uuid: Uuid,
  pInstanceUuid?: Uuid
): Promise<T.UserPermission[]> => {
  if (!withBackend) {
    return Promise.resolve([
      { id: 'uuid1', name: 'app', assigned: 'uuid1' },
      { id: 'uuid2', name: 'admin', assigned: 'uuid2' },
      { id: 'uuid3', name: 'superadmin', assigned: 'uuid2' }
    ]);
  }

  const query = {
    Permission: {
      projection: {},
      references: {
        PermissionInstance: {
          projection: { uuid: true, instance: { uuid: true } },
          filters: { instance: { uuid: pInstanceUuid || instanceUuid } },
          references: {
            UserPermission: {
              projection: { uuid: true },
              filters: { user: { uuid } }
            }
          }
        }
      },
      order: { by: 'name' }
    }
  };

  const d = await Stateful.Request.post('/crud/query', query);

  return U.formatAssigned(
    d.Permission.filter(
      (x: any) =>
        (x.PermissionInstance &&
          x.PermissionInstance[0].instance.uuid === pInstanceUuid) ||
        instanceUuid
    )
  );
};

export const insert = async (
  userUuid: Uuid,
  permissionUuid: Uuid,
  pInstanceUuid?: Uuid
): Promise<boolean> => {
  if (!withBackend) {
    return Promise.resolve(true);
  }

  const permissionInstance = await CPermissionInstance.detail({
    permission: { uuid: permissionUuid },
    instance: { uuid: pInstanceUuid || instanceUuid }
  });

  const data = {
    permissionInstance: { uuid: permissionInstance.uuid },
    user: { uuid: userUuid }
  };

  return C.insert(data).then(_x => true);
};

export const deletePermission = async (
  userUuid: Uuid,
  permissionUuid: Uuid
): Promise<boolean> => {
  if (!withBackend) {
    return Promise.resolve(true);
  }

  const permissionInstance = await CPermissionInstance.detail({
    permission: { uuid: permissionUuid },
    instance: { uuid: instanceUuid }
  });

  return C.delete({
    user: { uuid: userUuid },
    permissionInstance: { uuid: permissionInstance.uuid }
  }).then(_x => false);
};

export const toggle = async (
  userUuid: Uuid,
  id: Uuid,
  assigned: boolean,
  instanceUuid?: Uuid
) => {
  if (!withBackend) {
    return Promise.resolve(assigned);
  }

  console.log(userUuid, id, assigned);

  if (!!assigned) {
    return deletePermission(String(userUuid), id);
  }

  return insert(String(userUuid), id, instanceUuid);
};
