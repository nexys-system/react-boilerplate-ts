export interface User {
  email: string;
  password: string;
}

export interface SignUpUser extends User {
  firstName: string;
  lastName: string;
}

export interface LoginResponse {
  token: string;
  profile: any;
  permissions: string[];
  locale: string;
}
