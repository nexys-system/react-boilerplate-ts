import { Id, Uuid } from '@nexys/material-components/dist/common/type';
import { Stateful } from '@nexys/material-components';
import { instanceUuid, withBackend } from 'config';

import * as T from './type';
import * as U from './utils';
import * as MockData from './mock-data';

const C = new Stateful.RequestUtil.Crud.withUuid<T.UserCrud>('User');
const {
  RequestUtil: {
    Wrapper: { RequestWrapper }
  }
} = Stateful;

const projection = {
  status: {}
};

export const list = async (): Promise<T.User[]> => {
  if (!withBackend) {
    console.log('USER list');
    return Promise.resolve(MockData.data.map(x => U.postProcessing(x)));
  }

  const re = await RequestWrapper(C.list({ projection }));

  return re.map(x => U.postProcessing(x));
};

export const insert = async (
  data: Partial<T.User>
): Promise<{ id: Id | Uuid }> => {
  if (!withBackend) {
    console.log('USER insert', data);
    return Promise.resolve({ id: 'uuid1' });
  }

  const dataForBackend: Omit<T.UserCrud, 'uuid'> = {
    firstName: data.firstName!,
    lastName: data.lastName!,
    email: data.email!,
    status: { id: data.status!.id },
    instance: {
      uuid: instanceUuid
    }
  };

  const re = await RequestWrapper(C.insertByUuid(dataForBackend));
  return { id: re.uuid };
};

export const detail = async (id: Id | Uuid): Promise<T.User> => {
  if (!withBackend) {
    console.log('USER detail', id);
    const item = MockData.data.find(x => x.uuid === id);
    return Promise.resolve(U.postProcessing(item || MockData.data[0]));
  }

  const re = await RequestWrapper(C.detail({ uuid: String(id) }));
  return U.postProcessing(re);
};

export const update = (data: Partial<T.User>): Promise<boolean> => {
  if (!withBackend) {
    console.log('USER update', data);
    return Promise.resolve(true);
  }

  const dataForBackend: Omit<T.UserCrud, 'status' | 'instance'> = {
    uuid: data.uuid!,
    firstName: data.firstName!,
    lastName: data.lastName!,
    email: data.email!
  };

  return RequestWrapper(C.updateByUuid(dataForBackend));
};

export const deleteById = (id: Id | Uuid): Promise<boolean> => {
  if (!withBackend) {
    console.log('USER delete', id);
    return Promise.resolve(true);
  }

  return RequestWrapper(C.deleteByUuid(String(id)));
};

export const statusList = () => {
  return Promise.resolve(U.statuses);
};

export const statusUpdate = async (
  uuid: Uuid,
  optionId: Id
): Promise<boolean> => {
  if (!withBackend) {
    console.log('statusUpdate', uuid, optionId);

    return Promise.resolve(true);
  }

  const dataForBackend: Pick<T.UserCrud, 'uuid' | 'status'> = {
    uuid,
    status: { id: optionId }
  };

  return RequestWrapper(C.updateByUuid(dataForBackend));
};
