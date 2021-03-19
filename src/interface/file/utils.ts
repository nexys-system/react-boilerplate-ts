import { File } from 'interface/crud/type';

export const postProcessing = (x: File): File => ({
  ...x,
  contentType: !x.contentType ? 'application/json' : x.contentType
});
