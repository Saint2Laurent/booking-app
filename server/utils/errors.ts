import { LoginResponse } from '../../shared/types/api/auth/login';
import { RegistrationResponse } from '../../shared/types/api/auth/register';

export type Response = LoginResponse | RegistrationResponse;


export const error: Response = {
    success: false,
    errors: [{ path: 'DATABASE OR NETWORK', message: 'Error' }]
}

export const WrongCredits: Response = {
    token: null,
    success: false,
    errors: [{ path: 'LOGIN', message: 'Wrong Credentials' }]
};

export const AlreadySigned: Response = {
    success: false,
    errors: [{ path: 'REGISTER', message: 'Wow! You are already signed!' }]
}
