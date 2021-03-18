import * as CT from 'interface/crud/type';
import * as T from './type';

export const postProcessing = (instance: CT.Instance): T.Instance => {
  return {
    ...instance,
    dateAdded: new Date(instance.dateAdded)
  };
};
