import { Id, Uuid } from '@nexys/material-components/dist/common/type';
import { Stateful } from '@nexys/material-components';
import { withBackend } from 'config';

import * as CT from 'interface/crud/config';
import * as MockData from './mock-data';

const C = new Stateful.RequestUtil.Crud.withUuid<CT.Instance>('Instance');
const {
  RequestUtil: {
    Wrapper: { RequestWrapper }
  }
} = Stateful;

export const list = (): Promise<CT.Instance[]> => {
  if (!withBackend) {
    return Promise.resolve(MockData.data);
  }

  return RequestWrapper(C.list({ projection: {} }));
};

export const insert = async (
  data: Partial<CT.Instance>
): Promise<{ id: Id | Uuid }> => {
  if (!withBackend) {
    return Promise.resolve({ id: 'uuid1' });
  }

  const dataForBackend: Omit<CT.Instance, 'uuid'> = {
    name: data.name!,
    dateAdded: new Date()
  };

  const re = await RequestWrapper(C.insertByUuid(dataForBackend));
  return { id: re.uuid };
};

export const detail = (id: Id | Uuid): Promise<CT.Instance> => {
  if (!withBackend) {
    const item = MockData.data.find(x => x.uuid === id);
    return Promise.resolve(item || MockData.data[0]);
  }

  return RequestWrapper(C.detail({ uuid: String(id) }));
};

export const update = (data: Partial<CT.Instance>): Promise<boolean> => {
  if (!withBackend) {
    return Promise.resolve(true);
  }

  const dataForBackend: CT.Instance = {
    uuid: data.uuid!,
    name: data.name!,
    dateAdded: data.dateAdded!
  };

  return RequestWrapper(C.updateByUuid(dataForBackend));
};

export const deleteById = (id: Id | Uuid): Promise<boolean> => {
  if (!withBackend) {
    return Promise.resolve(true);
  }

  return RequestWrapper(C.deleteByUuid(String(id)));
};
