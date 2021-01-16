import React from 'react';

import { List, Types } from '@nexys/mui-list';
import * as Portfolio from 'interface/portfolio';

import NUtils from '@nexys/utils';

const def: Types.Definition<Portfolio.PortfolioLine> = [
  { name: 'label', label: 'Label' },
  { name: 'amount', label: 'Amount' },
  { name: 'value', label: 'Value' },
  {
    name: 'value',
    label: 'Total',

    render: x => (
      <span style={{ textAlign: 'right' }}>
        {NUtils.number.formatNumber(x.value * (x.amount || 1))}
      </span>
    )
  }
];

const total: number = Portfolio.data
  .map(x => x.value * (x.amount || 1))
  .reduce((a, b) => a + b, 0);

export default () => (
  <>
    <List def={def} data={Portfolio.data} />
    <span>{NUtils.number.formatNumber(total)}</span>
  </>
);
