import { UserPayload } from '../../shared/types/entity/user';
import { User } from '../types/users/User';
import * as dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { Errors } from '../../shared/types/misc/errors';

const secret = dotenv.config().parsed.SECRET;

// Generate Payload
export const payloadGen = ({ _id }: User): UserPayload => {
  return { _id }
}

// Generate Tokens
export const tokenGen = (payload: UserPayload): string => {
  return jwt.sign(payload, secret, { expiresIn: '1h' });
}

// Access Upon Successful Login
export const Access = (user: User) => {
  return {
    token: tokenGen(payloadGen(user)),
    success: true,
    errors: [] as Errors
  }
}