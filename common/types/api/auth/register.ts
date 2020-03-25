import { Errors } from '../../misc/errors';

export interface RegistrationPayload {
  fullName: string;
  mail: string;
  password: string;
}

export interface GoogleRegistrationPayload {
  googleTokenId: string;
}

export interface RegistrationResponse {
  token?: string;
  success: string;
  errors: Errors;
}

