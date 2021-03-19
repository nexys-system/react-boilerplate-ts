import { Id, Uuid } from '@nexys/material-components/dist/common/type';
import { Stateful } from '@nexys/material-components';

import { withBackend } from 'config';
import * as CT from 'interface/crud/config';
import * as MockData from './mock-data';

const C = new Stateful.RequestUtil.Crud.CrudRequest<CT.Permission>(
  'Permission'
);

export const list = async (): Promise<CT.Permission[]> => {
  if (!withBackend) {
    return Promise.resolve(MockData.data);
  }

  return C.list({
    projection: {},
    order: { by: 'name' }
  });
};

export const detail = async (id: Id | Uuid): Promise<CT.Permission> => {
  if (!withBackend) {
    const item = MockData.data.find(x => x.uuid === id);
    return Promise.resolve(item || MockData.data[0]);
  }

  return C.detail({ uuid: String(id) });
};

export const insert = async (data: CT.Permission): Promise<{ id: Id }> => {
  if (!withBackend) {
    return Promise.resolve({ id: 1 });
  }

  const id = (await C.insert(data)) as Id;
  return { id };
};

export const update = (data: Partial<CT.Permission>): Promise<boolean> => {
  if (!withBackend) {
    return Promise.resolve(true);
  }

  if (!data.uuid) {
    throw Error('no uuid');
  }

  return C.update(data, { uuid: data.uuid });
};

export const deleteById = async (id: Id | Uuid): Promise<boolean> => {
  if (!withBackend) {
    return Promise.resolve(true);
  }

  const r = await C.delete({ uuid: String(id) });
  return r > 0;
};
