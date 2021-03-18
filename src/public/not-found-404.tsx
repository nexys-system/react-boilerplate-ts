import React from 'react';

import { Typography } from '@material-ui/core';

export default () => {
  return (
    <div className="col s12">
      <div className="card">
        <div className="card-content">
          <Typography variant="h4">Page not found</Typography>
          <p>
            Maybe the page you are looking for has been removed, or you typed in
            the wrong URL
          </p>
        </div>
      </div>
    </div>
  );
};
