import React from 'react';
import Title from 'common/title';
import { UI } from '@nexys/material-components';

import { IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

export default () => (
  <>
    <Title title="Home" type="pageTitle" />
    <p>
      <UI.Link to={'/app/profile'}>an internal link</UI.Link>
    </p>

    <p>
      Source
      <a href={'https://github.com/nexys-system/react-boilerplate-ts'}>
        <IconButton>
          <GitHubIcon />
        </IconButton>
      </a>
    </p>
  </>
);
