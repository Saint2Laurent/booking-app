import { Errors} from '../../common/types/misc/errors';
import { RegistrationPayload, RegistrationResponse, } from '../../common/types/api/auth/register';
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
    addUser: async (_: any, args: RegistrationPayload) => {
      const newUser = await userModel.create({
        ...args
      });
      // await newUser.save();

      return {
        token: 'tobegenerated',
        success: true,
        errors: {} as Errors
      };
    }
  }
};
