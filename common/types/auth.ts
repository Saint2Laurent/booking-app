import { ErrorFormat } from "./account";
// INPUTS
//
export interface RegistrationInput {
  fullname: String;
  email: String;
  password: String;
  isGoogle: Boolean;
  googleID: String;
}

export interface LoginInput {
  email: String;
  password: String;
}

export interface GoogleLoginInput {
  googleID: String;
}

export interface GoogleRegistrationPayload {
  googleIdToken: String;
}

// RESPONSES
//

export interface RegistrationResponse {
  token: String;
  success: Boolean;
  errors: ErrorFormat[];
}

export interface LoginResponse {
  token: String;
  errors: ErrorFormat[];
}
