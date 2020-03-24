import { Errors} from '../../common/types/misc/errors';
import { RegistrationPayload, RegistrationResponse, } from '../../common/types/api/auth/register';
import { getModelForClass } from '@typegoose/typegoose';
import { User } from '../models/User';
const userModel = getModelForClass(User);
import bcryptjs from 'bcryptjs';


export default {
  Query: {
    users: async () => {
      return await userModel.find();
    },

    user(_: any, args: any) {}
  },

  Mutation: {
    addUser: async (_: any, args: RegistrationPayload) => {
      const dupicate = await userModel.findOne({mail: args.mail});
      if (dupicate){
        return {
          token: '',
          success: false,
          errors: [{
            path: 'email',
            message: 'already exists'
          }]
        }
      }
      const newUser = await userModel.create({
        ...args
      });
      newUser.password = await  bcryptjs.hash(args.password, 10);
      // await newUser.save();

      return {
        token: newUser.password,
        success: true,
        errors: [] as Errors
      };
    }
  }
};
