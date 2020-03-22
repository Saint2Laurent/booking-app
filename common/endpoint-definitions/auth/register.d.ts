import {GoogleRegistrationPayload, RegistrationPayload, RegistrationResponse} from "../../types/auth";


// @Register Endpoints

//     Mutation: registerUser
//     Used to register a user with email/password credentials
declare type RegisterUser = (payload: RegistrationPayload) => RegistrationResponse


// Mutation: googleRegisterUser
// Used to register a user with google account
// Only requires googleId and no email/password
// Handling on the backend info: https://developers.google.com/identity/sign-in/web/backend-auth
declare type GoogleRegisterUser = (payload: GoogleRegistrationPayload) => RegistrationResponse
