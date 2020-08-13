import React from 'react';
import Title from 'common/title';
import { UI } from '@nexys/material-components';

export default () => (
  <>
    <Title title="Home" type="pageTitle" />
    <p>
      <UI.Link to={'/app'}>a random link</UI.Link>
    </p>
  </>
);
