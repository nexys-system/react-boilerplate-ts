import { Id, Uuid } from '@nexys/material-components/dist/common/type';

export interface LogUser {
  uuid: Uuid;
}

export interface Instance {
  uuid: Uuid;
}

export interface Env {
  id: Id;
}

export interface Product {
  id: Id;
}
