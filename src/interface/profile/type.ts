import { Uuid, UOptionSet } from '@nexys/utils/dist/types';

export interface Profile {
  uuid: Uuid;
  firstName: string;
  lastName: string;
  email: string;
}
