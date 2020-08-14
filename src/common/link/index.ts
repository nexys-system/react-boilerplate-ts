// repository of all links used in the application to avoid wrong refewrences

/*
attempt at having a less verbose solution: works but no autocomplete ...
const appArray = ['dashboard', 'crud', 'profile', 'unauthorizedPage'];

const AppMap: Map<string, string> = new Map(
  appArray.map(k => {
    return [k, '/app/' + k];
  })
);

export const App = Object.fromEntries(AppMap);
*/

const toRouteApp = (s: string) => '/app' + s;
const toRoutePublic = (s: string) => '' + s;

export const Public = {
  default: toRoutePublic('/'),
  signup: toRoutePublic('/signup'),
  unauthorized: toRoutePublic('/unauthorized'),
  login: toRoutePublic('/login'),
  logout: toRoutePublic('/logout')
};

export const App = {
  default: toRouteApp('/'),
  dashboard: toRouteApp('/dashboard'),
  crud: toRouteApp('/crud'),
  profile: toRouteApp('/profile'),
  unauthorizedPage: toRouteApp('/unauthorizedPage')
};
