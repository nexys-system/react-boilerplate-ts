import { File } from 'interface/crud/type';

export const files: Pick<File, 'uuid' | 'name' | 'contentType'>[] = [
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
