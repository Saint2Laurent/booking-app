import { Errors } from '../../misc/errors';

export interface RegistrationPayload {
  mail: string;
  password: string;
  fullName: string;
}

export interface GoogleRegistrationPayload {
  googleTokenId: string;
}

export interface RegistrationResponse {
  token?: string;
  success: string;
  errors: Errors;
}
