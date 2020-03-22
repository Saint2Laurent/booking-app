import { ErrorFormat } from '../../common/types/entity/user';
import { RegistrationInput, LoginInput, RegistrationResponse, LoginResponse } from '../../common/types/api/auth';
import { getModelForClass } from '@typegoose/typegoose';
import { User } from '../models/User';
const userModel = getModelForClass(User);

export default {
  Query: {
    users: async () => {
      return await userModel.find();
    },

    user(_: any, args: any) {}
  },

  Mutation: {
    addUser: async (_: any, args: RegistrationInput) => {
      const newUser = await userModel.create({
        ...args
      });
      // await newUser.save();

      return {
        token: 'tobegenerated',
        success: true,
        errors: [] as ErrorFormat[]
      };
    }
  }
};
