export type UserRole = 'MASTER' | 'DESK' | 'STAFF' | 'CUSTOMER';

// the returned payload inside the token
export interface UserPayload {
  // __aware of the caps here
  _id: String;
  fullName: String; 
  mail: String;
  role: String;
}

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

export interface Parent {
  _:any
}
