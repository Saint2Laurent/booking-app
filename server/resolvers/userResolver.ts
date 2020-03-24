import { Errors } from '../../common/types/misc/errors';
import { RegistrationPayload, RegistrationResponse } from '../../common/types/api/auth/register';
import { getModelForClass } from '@typegoose/typegoose';
import { User } from '../models/User';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
const secret = dotenv.config().parsed.SECRET;

const userModel = getModelForClass(User);

// generating Tokens
const tokenGen = (payload: object): string => {
  return jwt.sign(payload, secret, { expiresIn: '1h' });
};

export default {
  Query: {
    users: async () => {
      return await userModel.find();
    },

    user(_: any, args: any) {},

    isUserRegistered: async (_: any, args: any) => {
      if (await userModel.findOne({ mail: args.mail })) return true;
      return false;
    }
  },

  Mutation: {
    addUser: async (_: any, args: RegistrationPayload) => {
      const dupicate = await userModel.findOne({ mail: args.mail });
      if (dupicate) {
        return {
          token: '',
          success: false,
          errors: [
            {
              path: 'email',
              message: 'already exists'
            }
          ]
        };
      }
      const newUser = await userModel.create({
        ...args,
        password: await bcryptjs.hash(args.password, 10)
      });

      const token = tokenGen({ ...newUser }); // return the ID of the user
      return {
        token,
        success: true,
        errors: [] as Errors
      };
    }
  }
};
