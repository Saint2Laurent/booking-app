import {GoogleRegistrationPayload, RegistrationPayload, RegistrationResponse} from "../../types/auth";

export interface RegisterUser{

    // Mutation: registerUser
    // Used to register a user with email/password credentials
    registerUser: (payload: RegistrationPayload) => RegistrationResponse,

    // Mutation: googleRegisterUser
    // Used to register a user with google account
    // Only requires googleId and no email/password
    // Handling on the backend info: https://developers.google.com/identity/sign-in/web/backend-auth
    googleRegisterUser: (payload: GoogleRegistrationPayload) => RegistrationResponse
}