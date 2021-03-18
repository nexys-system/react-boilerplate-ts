import React from 'react';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/DeleteForeverOutlined';

import { UI } from '@nexys/material-components';

const { FileUpload } = UI;

interface Props {
  uploadPromise: (f: File) => Promise<Response>;
  onSuccess?: (f: File) => void;
}

export default ({ uploadPromise, onSuccess }: Props): JSX.Element => {
  const [f, setF] = React.useState<File | undefined>(undefined);

  const handleUpload = (f: File) => {
    uploadPromise(f).then(() => {
      setF(f);

      if (onSuccess) {
        onSuccess(f);
      }
    });

    return Promise.resolve();
  };

  return (
    <>
      <FileUpload.UI promise={handleUpload} />

      {f && (
        <IconButton onClick={() => setF(undefined)} aria-label="delete">
          <DeleteIcon />
        </IconButton>
      )}

      {f && <FileUpload.Preview file={f} />}
    </>
  );
};
