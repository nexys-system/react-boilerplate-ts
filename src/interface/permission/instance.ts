import * as BT from '@nexys/material-components/dist/business-module/user/type';
import { Uuid } from '@nexys/material-components/dist/common/type';
import { Stateful } from '@nexys/material-components';

import { withBackend } from 'config';
import * as CT from 'interface/crud/config';
import * as T from './type';
import * as U from './utils';
import * as MockData from './mock-data';

const CPermissionInstance = new Stateful.RequestUtil.Crud.CrudRequest<T.PermissionInstanceCrud>(
  'PermissionInstance'
  // '/crud/query/admin',
  // '/crud/mutate/admin'
);
const CPermission = new Stateful.RequestUtil.Crud.CrudRequest<CT.Permission>(
  'Permission'
  // '/crud/query/admin',
  // '/crud/mutate/admin'
);

export const listAssign = async (
  instanceUuid: Uuid
): Promise<BT.UserPermission<Uuid>[]> => {
  if (!withBackend) {
    return Promise.resolve(
      MockData.userPermissions.map(a => U.postProcessing(a))
    );
  }

  const params = {
    projection: {},
    references: {
      PermissionInstance: {
        filters: {
          instance: {
            uuid: instanceUuid
          }
        }
      }
    }
  };

  const d = await CPermission.list<T.UserPermissionCrud>(params);

  return d
    .map(a => U.postProcessing(a))
    .sort((a, b) => (a.name > b.name ? 1 : -1));
};

const insert = async (
  instanceUuid: Uuid,
  permissionId: Uuid
): Promise<boolean> => {
  const data = {
    permission: { uuid: permissionId },
    instance: { uuid: instanceUuid }
  };

  return CPermissionInstance.insert(data).then(_x => true);
};

const deletePermission = async (
  instanceUuid: Uuid,
  permissionId: Uuid
): Promise<boolean> => {
  const filters = {
    permission: { uuid: permissionId },
    instance: { uuid: instanceUuid }
  };

  return CPermissionInstance.delete(filters).then(_x => false);
};

export const toggle = async (
  instanceUuid: Uuid,
  permissionId: Uuid,
  assigned: boolean
) => {
  if (!!assigned) {
    return deletePermission(instanceUuid, permissionId);
  }

  return insert(instanceUuid, permissionId);
};
