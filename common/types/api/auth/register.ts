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
  success: boolean;
  errors?: RegistrationErrors;
}

export interface GoogleRegistrationResponse {
  success: boolean;
  token: string;
  errors?: GoogleRegistrationErrors;
}

export interface RegistrationErrors {
  mailInvalid?: boolean;
  passwordInvalid?: boolean;
  fullNameInvalid?: boolean;
  alreadyRegistered?: boolean;
  needsConfirmation?: boolean;
}

export interface GoogleRegistrationErrors {
  tokenInvalid?: boolean;
}
