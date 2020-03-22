export type UserRole = 'MASTER' | 'DESK' | 'STAFF' | 'CUSTOMER';

export interface User {
  id: string;
  mail: string;
  password: string;
  fullName: string;
  isGoogle: boolean;
  googleId: string;
  role: UserRole;
  createdAt: string;
}

export interface UserPartial extends Partial<User> {}
