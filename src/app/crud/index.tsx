import React from 'react';
import Title from 'common/title';
import CRUD from './crud';

export default () => {
  return (
    <>
      <Title title="CRUD Example" type="pageTitle" />
      <p>
        This is a simple CRUD example, for more UX journey examples, please
        refer to:{' '}
        <a href="https://components.nexys.io/crud">
          https://components.nexys.io/crud
        </a>
      </p>
      <CRUD />
    </>
  );
};
