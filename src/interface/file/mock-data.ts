import * as CT from 'interface/crud/type';

export const files: Pick<CT.File, 'uuid' | 'name' | 'contentType'>[] = [
  {
    uuid: 'uuid1',
    name: 'First File',
    contentType: 'application/pdf'
  },
  {
    uuid: 'uuid2',
    name: 'Just an image',
    contentType: 'jpeg'
  }
];
