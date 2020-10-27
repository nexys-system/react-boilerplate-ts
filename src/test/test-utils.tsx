import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory, MemoryHistory, History } from 'history';
import { SnackbarProvider, ThemeProvider } from '@nexys/material-components';

import theme from 'theme';

interface Props {
  children: React.ReactNode | JSX.Element;
}

interface CustomRenderOptions {
  route?: string;
  history?: MemoryHistory<any>;
}

const customRender = (
  ui: React.ReactElement,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] })
  }: CustomRenderOptions = {}
) => {
  const Wrapper = ({ children }: Props) => (
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
        <Router history={history}>{children}</Router>
      </SnackbarProvider>
    </ThemeProvider>
  );

  const utils = render(ui, {
    wrapper: Wrapper as React.ComponentType
  });

  return {
    ...utils,
    history
  };
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
