import React from 'react';

import { UI } from '@nexys/material-components';
import { appTitle, gitHubRepoUrl } from 'config';

const shaToUrl = (sha: string) => `${gitHubRepoUrl}/commit/${sha}`;

const sha: string = process.env.REACT_APP_GIT_SHA || 'sha_placeholder';

const Footer = () => (
  <UI.Nav.Footer.Footer>
    <UI.Nav.Footer.Copyright
      sha={{ sha, link: shaToUrl(sha) }}
      company={appTitle}
    />
  </UI.Nav.Footer.Footer>
);

export default Footer;
