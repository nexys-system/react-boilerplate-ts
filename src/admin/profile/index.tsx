import React from 'react';

import { Data as D, SimpleUI } from '@nexys/material-components';

import * as Data from 'interface/profile/data';
import * as T from 'interface/profile/type';

interface Props {
  data: T.Profile;
}

const ProfilePage = ({ data }: Props) => {
  return (
    <SimpleUI.ProfilePage<T.Profile>
      data={data}
      updateProfilePromise={Data.update}
      updatePasswordPromise={Data.passwordUpdate}
    />
  );
};

const ProfilePageLoader = () => {
  return (
    <D.Load.WithLoader<T.Profile>
      dataLoad={Data.detail()}
      Component={ProfilePage}
    />
  );
};

export default ProfilePageLoader;
