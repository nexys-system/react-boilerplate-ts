import * as ET from '@nexys/material-components/dist/entity-generator/type';

export const data: ET.EntityMockData = {
  Instance: {
    list: [
      {
        uuid: 'uuid1',
        name: 'Mock Instance #1',
        dateAdded: '2021-01-02T14:15:00Z'
      },
      {
        uuid: 'uuid2',
        name: 'Mock Instance #2',
        dateAdded: '2021-01-05T16:22:00Z'
      }
    ]
  },
  User: {
    list: [
      {
        uuid: 'user-uuid-1',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        status: { id: 1 },
        instance: {
          uuid: 'uuid1'
        },
        lang: 'en'
      },
      {
        uuid: 'user-uuid-2',
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane.doe@example.com',
        status: { id: 2 },
        instance: {
          uuid: 'uuid1'
        },
        lang: 'en'
      }
    ]
  },
  Permission: {
    list: [
      {
        uuid: 'permission-uuid-1',
        name: 'app'
      },
      {
        uuid: 'permission-uuid-2',
        name: 'admin'
      },
      {
        uuid: 'permission-uuid-3',
        name: 'superadmin'
      }
    ]
  },
  PermissionInstance: {
    list: [
      {
        uuid: 'permission-instance-uuid-1',
        instance: {
          uuid: 'uuid1'
        },
        permission: {
          uuid: 'permission-uuid-1'
        }
      },
      {
        uuid: 'permission-instance-uuid-2',
        instance: {
          uuid: 'uuid1'
        },
        permission: {
          uuid: 'permission-uuid-2'
        }
      },
      {
        uuid: 'permission-instance-uuid-3',
        instance: {
          uuid: 'uuid1'
        },
        permission: {
          uuid: 'permission-uuid-3'
        }
      }
    ]
  }
};
