import React from 'react';

import { CrudSimple } from '@nexys/material-components'; //'../lib/crud-simple/generic/app';
import * as T from '@nexys/material-components/dist/crud-simple/type';
import { Id, Uuid } from '@nexys/material-components/dist/common/type';

// type definition
export interface CountrySimple {
  id: Id;
  name: string;
  short: string;
}

// fake data
const countries = [
  { id: 1, name: 'United States', short: 'USA' },
  { id: 2, name: 'France', short: 'FR' },
  { id: 3, name: 'Hungary', short: 'HU' },
  { id: 4, name: 'Spain', short: 'ES' },
  { id: 5, name: 'Germany', short: 'DE' },
  { id: 6, name: 'Switzerland', short: 'CH' },
  { id: 7, name: 'Canada', short: 'CA' }
];

// data interface (CRUD)
const DataInterface: T.DataInterface<CountrySimple> = {
  list: () => Promise.resolve(countries),
  detail: (id: Uuid | Id) => {
    const c = countries.find(x => Number(x.id) === Number(id));
    if (!c) {
      return Promise.reject(null);
    }
    return Promise.resolve(c);
  },
  insert: (data: CountrySimple) => Promise.resolve({ id: 3 }),
  update: (data: Partial<CountrySimple>) => Promise.resolve(true),
  deleteById: (id: Id | Uuid) => Promise.resolve(true)
};

// data defintiion/ config
const dataDef: T.DataDef<CountrySimple> = {
  urlPrefix: '/app/crud',
  displayType: 'toggle',
  title: 'Simple',
  fields: [
    { name: 'name', label: 'Name', type: 'string' },
    { name: 'short', label: 'Short', type: 'string' }
  ],
  listConfig: { search: true }
};

export default () => (
  <CrudSimple.Generic.App dataDef={dataDef} Data={DataInterface} />
);
