import * as BT from '@nexys/material-components/dist/business-module/user/type';
import { Uuid } from '@nexys/material-components/dist/common/type';
import * as T from './type';

export const postProcessing = (
  item: T.UserPermissionCrud
): BT.UserPermission<Uuid> => {
  return {
    id: item.uuid,
    name: item.name,
    assigned: item.PermissionInstance && item.PermissionInstance[0].uuid
  };
};
