export interface RegistrationPayload{
    email: string;
    password: string;
}

export interface GoogleRegistrationPayload{
    googleIdToken: string
}

export interface RegistrationResponse{
    success: boolean,
    errors: []
}