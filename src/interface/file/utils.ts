import * as CT from 'interface/crud/type';

export const postProcessing = (x: CT.File): CT.File => ({
  ...x,
  contentType: !x.contentType ? 'application/json' : x.contentType
});
