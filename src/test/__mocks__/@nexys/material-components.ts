const {
  Auth,
  CrudSimple,
  Data,
  HOC,
  UI,
  Utils,
  ThemeProvider,
  SnackbarProvider
} = jest.requireActual('@nexys/material-components');

const Stateful = {
  Credentials: {
    getProfile: jest.fn(),
    remove: jest.fn(),
    set: jest.fn()
  },
  Store: {
    get: jest.fn(),
    remove: jest.fn(),
    set: jest.fn()
  }
};

export {
  Auth,
  CrudSimple,
  Data,
  HOC,
  Stateful,
  UI,
  Utils,
  ThemeProvider,
  SnackbarProvider
};
