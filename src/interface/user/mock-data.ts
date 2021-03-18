import * as T from './type';

export const data: T.UserCrud[] = [
  {
    uuid: 'uuid1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@emample.com',
    status: { id: 2 },
    instance: {
      uuid: 'uuid1'
    }
  },
  {
    uuid: 'uuid2',
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane.doe@emample.com',
    status: { id: 1 },
    instance: {
      uuid: 'uuid1'
    }
  }
];

export const permissions: {
  id: number;
  name: string;
  UserPermission?: { uuid: string }[];
}[] = [
  {
    id: 1,
    name: 'app',
    UserPermission: [{ uuid: 'uuid1' }]
  },
  {
    id: 2,
    name: 'admin',
    UserPermission: [{ uuid: 'uuid2' }]
  },
  {
    id: 3,
    name: 'superadmin',
    UserPermission: [{ uuid: 'uuid3' }]
  }
];
