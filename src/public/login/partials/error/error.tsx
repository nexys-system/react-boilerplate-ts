import React from 'react';

import { Stateful } from '@nexys/material-components';

import { ErrorContainer, ErrorMessage } from './error.styles';

const { Store } = Stateful;

interface Props {
  children: React.ReactNode | JSX.Element;
  name: string;
}

const Error = (props: Props) => {
  const { name, children } = props;

  if (Store.get(name) !== true) {
    return null;
  }

  Store.remove(name);
  console.log(name);

  return (
    <ErrorContainer>
      <ErrorMessage role="alert">{children}</ErrorMessage>
    </ErrorContainer>
  );
};

export default Error;
