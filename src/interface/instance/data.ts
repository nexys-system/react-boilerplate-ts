import { Id, Uuid } from '@nexys/material-components/dist/common/type';
import { Stateful } from '@nexys/material-components';
import { withBackend } from 'config';

import * as CT from 'interface/crud/type';
import * as T from './type';
import * as U from './utils';
import * as MockData from './mock-data';

const C = new Stateful.RequestUtil.Crud.withUuid<CT.Instance>('Instance');
const {
  RequestUtil: {
    Wrapper: { RequestWrapper }
  }
} = Stateful;

export const list = async (): Promise<T.Instance[]> => {
  if (!withBackend) {
    return Promise.resolve(MockData.data.map(d => U.postProcessing(d)));
  }

  const re = await RequestWrapper(C.list({ projection: {} }));

  return re.map(d => U.postProcessing(d));
};

export const insert = async (
  data: Partial<T.Instance>
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

export const detail = async (id: Id | Uuid): Promise<T.Instance> => {
  if (!withBackend) {
    const item = MockData.data.find(x => x.uuid === id);
    return Promise.resolve(U.postProcessing(item || MockData.data[0]));
  }

  const re = await RequestWrapper(C.detail({ uuid: String(id) }));
  return U.postProcessing(re);
};

export const update = (data: Partial<T.Instance>): Promise<boolean> => {
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
