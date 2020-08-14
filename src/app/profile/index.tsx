import React from 'react';

import { Data as D, UI } from '@nexys/material-components';
import { Typography } from '@material-ui/core';

import Layout from 'common/layout';
import * as Data from '../../interface/profile';
import { Profile } from '../../interface/profile/type';

const View = (props: { data: Profile }) => {
  const { data } = props;
  return (
    <>
      <UI.ViewWrapper label="First Name">
        <Typography>{data.firstName}</Typography>
      </UI.ViewWrapper>
      <UI.ViewWrapper label="Last Name">
        <Typography>{data.lastName}</Typography>
      </UI.ViewWrapper>
      <UI.ViewWrapper label="Email">
        <Typography>{data.email}</Typography>
      </UI.ViewWrapper>
    </>
  );
};

const List = () => {
  return (
    <Layout title={'Profile'}>
      <D.Load.WithLoader Component={View} dataLoad={Data.detail()} />
    </Layout>
  );
};

export default List;
