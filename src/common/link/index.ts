const appBase = '/app';
const adminBase = '/admin';
const superAdminBase = '/superadmin';
const publicBase = '/';

const toRouteApp = (s: string) => appBase + s;
const toRouteAdmin = (s: string) => adminBase + s;
const toRouteSuperAdmin = (s: string) => superAdminBase + s;
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
  base: superAdminBase,
  instance: toRouteSuperAdmin('/instance'),
  permission: toRouteSuperAdmin('/permission'),
  entity: toRouteSuperAdmin('/entity')
};

export const Public = {
  base: publicBase,
  login: toRoutePublic('login'),
  logout: toRoutePublic('logout'),
  forgotYourPassword: toRoutePublic('forgotten-password'),
  signUp: toRoutePublic('sign-up')
};
