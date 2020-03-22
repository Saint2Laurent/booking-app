import {Errors} from "./errors";


// @Register types

export interface RegistrationPayload {
  mail: string;
  password: string;
  fullName: string;
}

// Only googleTokenId is sufficient as backend fetches
// the rest of the info via the google API

export interface GoogleRegistrationPayload{
  googleTokenId: string;
}

// If an account is registered throughout Google it doesnt require any mail confirmation
// and the API auto log-in the client and responds with a login token
// If the account is registered via email then success remains true and user
// should get a confirmation mail in their inbox in order to validate their email

export interface RegistrationResponse {
  token: string;
  success: boolean;
  errors: Errors;
}
