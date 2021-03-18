import { Uuid } from '@nexys/material-components/dist/common/type';
import NUtils from '@nexys/utils';

import { withBackend } from 'config';
import * as CT from 'interface/crud/type';
import * as U from './utils';
import * as MockData from './mock-data';

const list = async (
  uuid: Uuid,
  entity: string,
  filters: any
): Promise<CT.File[]> => {
  if (!withBackend) {
    return Promise.resolve(MockData.files.map(x => U.postProcessing(x)));
  }

  return Promise.resolve(MockData.files.map(x => U.postProcessing(x)));
};

export const listByProperty = (uuid: Uuid): Promise<CT.File[]> => {
  return list(uuid, 'property', { property: { uuid } });
};

export const listByInvestor = (uuid: Uuid): Promise<CT.File[]> => {
  return list(uuid, 'investor', { investor: { uuid } });
};

export const listByTenant = (uuid: Uuid): Promise<CT.File[]> => {
  return list(uuid, 'tenant', { tenant: { uuid } });
};

export const listByUser = (uuid: Uuid): Promise<CT.File[]> => {
  return list(uuid, 'user', { user: { uuid } });
};

export const deleteById = async (uuid: Uuid): Promise<{ uuid: Uuid }> => {
  if (!withBackend) {
    console.log('deleteFile', uuid);
    return Promise.resolve({ uuid });
  }

  return Promise.resolve({ uuid });
};

const upload = async (entity: any, f: File) => {
  const fileBuffer: ArrayBuffer = await f.arrayBuffer();
  const b64 = NUtils.buffer.arrayBufferTo64(fileBuffer);

  console.log('FILE UPLOAD', b64);

  return Promise.resolve((true as unknown) as Response);
};

export const uploadForProperty = (
  uuid: Uuid,
  file: File
): Promise<Response> => {
  return upload({ property: { uuid } }, file);
};

export const uploadForInvestor = (
  uuid: Uuid,
  file: File
): Promise<Response> => {
  return upload({ investor: { uuid } }, file);
};

export const uploadForTenant = (uuid: Uuid, file: File): Promise<Response> => {
  return upload({ tenant: { uuid } }, file);
};
