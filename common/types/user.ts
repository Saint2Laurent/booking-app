// All the fields are optional due to the nature of GQL itself

export type UserAccess = 'MASTER' | 'DESK' | 'STAFF' | 'CUSTOMER';

export interface User {
  id?: string;
  mail?: string;
  password?: string;
  fullName?: string;
  isGoogle?: string;
  googleId?: string;
  userAccess?: UserAccess;
}
