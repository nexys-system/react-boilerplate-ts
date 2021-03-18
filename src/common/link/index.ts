const appBase = '/app';
const adminBase = '/admin';
const publicBase = '/';

const toRouteApp = (s: string) => appBase + s;
const toRouteAdmin = (s: string) => adminBase + s;
const toRoutePublic = (s: string) => publicBase + s;

export const App = {
  base: appBase,
  default: toRouteApp('/'),
  dashboard: toRouteApp('/dashboard'),
  profile: toRouteApp('/profile')
};

export const Admin = {
  base: adminBase,
  default: toRouteAdmin('/'),
  dashboard: toRouteAdmin('/dashboard'),
  profile: toRouteAdmin('/profile'),
  user: toRouteAdmin('/user')
};

export const SuperAdmin = {
  base: adminBase,
  instance: toRouteAdmin('/instance'),
  permission: toRouteAdmin('/permission'),
  entity: toRouteAdmin('/entity')
};

export const Public = {
  base: publicBase,
  login: toRoutePublic('login'),
  logout: toRoutePublic('logout'),
  forgotYourPassword: toRoutePublic('forgotten-password'),
  signUp: toRoutePublic('sign-up')
};
